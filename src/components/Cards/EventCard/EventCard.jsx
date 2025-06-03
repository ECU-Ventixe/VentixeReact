import React, { useEffect, useState } from "react";
import "./EventCard.css";
import BookingModal from "../../Modals/BookingModal/BookingModal";

function EventCard({ event }) {
  const [openBooking, setOpenBooking] = useState(false);
  const [ticketsBought, setTicketsBought] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const percentage = ticketsBought
    ? Math.round((ticketsBought / event.ticketAmount) * 100)
    : 0;
  useEffect(() => {
    const boughtTickets = async () => {
      try {
        const response = await fetch(
          `https://localhost:7047/api/ticket/bought/${event.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTicketsBought(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setTicketsBought(0);
      }
    };
    boughtTickets();
  }, [event.id]);
  return (
    <>
      <div className="event-card" onClick={() => setOpenBooking(true)}>
        <div className="event-image"></div>
        <div className="event-info">
          <span className="event-time">{formatDate(event.eventStartDate)}</span>
          <h3>{event.eventName}</h3>
          <div className="event-location">
            <i className="fa-thin fa-location-dot"></i>
            <span>{event.location}</span>
          </div>
          <div className="event-tickets">
            <div className="tickets-left-container">
              <div className="tickets-left">
                <div
                  className="tickets-bought"
                  style={{ width: `${percentage}%` }}></div>
              </div>
              <span className="tickets-left-text">{percentage}%</span>
            </div>
            <span className="event-price">
              {event.price ? `$${event.price}` : "Free"}
            </span>
          </div>
        </div>
      </div>
      <BookingModal
        openBooking={openBooking}
        onClose={() => setOpenBooking(false)}
        event={event}
      />
    </>
  );
}
export default EventCard;
