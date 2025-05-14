import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image"></div>
      <div className="event-info">
        <span className="event-time">
          {event.startDate} - {event.startTime}
        </span>
        <h3>{event.name}</h3>
        <div className="event-location">
          <i className="fa-thin fa-location-dot"></i>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}
export default EventCard;
