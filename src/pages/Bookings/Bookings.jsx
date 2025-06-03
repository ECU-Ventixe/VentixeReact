import "./Bookings.css";
import Ticket from "../../components/Ticket/Ticket";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";

function Bookings() {
  const { getUserId } = useContext(AuthContext);
  const [eventData, setEventData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const userId = getUserId();

    const initGet = async () => {
      try {
        const bookingResponse = await fetch(
          `https://ventixe-ticket-ecu-bpbqcchqddg6ath9.swedencentral-01.azurewebsites.net/api/ticket/getticket/${userId}`
        );
        const bookings = await bookingResponse.json();
        const normalized = Array.isArray(bookings) ? bookings : [bookings];
        setBookingData(normalized);

        const events = await Promise.all(
          normalized.map(async (bookings) => {
            const eventResponse = await fetch(
              `https://ventixe-event-ecu-dvddbqcpewahfdcz.swedencentral-01.azurewebsites.net/api/event/getevent/${bookings.eventId}`
            );
            if (eventResponse.ok) {
              return await eventResponse.json();
            } else {
              console.error("Error fetching event:", eventResponse.statusText);
            }
          })
        );
        setEventData(events.filter(Boolean));
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    initGet();
  }, []);

  return (
    <div className="bookings">
      <h2>Your Bookings</h2>
      <div className="booking-list">
        {bookingData.map((booking) => {
          const event = eventData.find((e) => e.id === booking.eventId);
          if (!event) return null;
          return (
            <Ticket key={booking.id} eventData={event} bookingData={booking} />
          );
        })}
      </div>
    </div>
  );
}
export default Bookings;
