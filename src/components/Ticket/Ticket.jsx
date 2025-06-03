import "./Ticket.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

function Ticket({ eventData, bookingData }) {
  const { getUserEmail } = useContext(AuthContext);
  const userEmail = getUserEmail();

  const formatedDate = new Date(eventData.eventStartDate).toLocaleString(
    "en-european",
    {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }
  );
  const formatedTime = new Date(eventData.eventStartDate).toLocaleString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
  return (
    <div className="ticket">
      <div className="event-img">
        <div className="circle-cut top"></div>
        <div className="circle-cut bottom"></div>
        <div className="img-container"></div>
        <div className="event-name">
          <h3>{eventData.eventName}</h3>
        </div>
      </div>
      <div className="ticket-content">
        <div className="circle-cut top"></div>
        <div className="circle-cut bottom"></div>
        <div className="ticket-info-top">
          <div className="ticket-info">
            <span className="ticket-label">Name</span>
            <span className="ticket-value">
              {bookingData.firstName} {bookingData.lastName}
            </span>
          </div>
          <div className="ticket-info">
            <span className="ticket-label">Id</span>
            <span className="ticket-value">{eventData.id}</span>
          </div>
        </div>
        <div className="ticket-info-bottom ">
          <div className="ticket-info date">
            <span className="ticket-label">Event Date</span>
            <span className="ticket-value">{formatedDate}</span>
          </div>
          <div className="ticket-info time">
            <span className="ticket-label time">Event Time</span>
            <span className="ticket-value">{formatedTime}</span>
          </div>
          <div className="ticket-info location">
            <span className="ticket-label ">Location</span>
            <span className="ticket-value">
              {eventData.location}, {eventData.city}
            </span>
          </div>
        </div>
      </div>
      <div className="ticket-scan"></div>
    </div>
  );
}
export default Ticket;
