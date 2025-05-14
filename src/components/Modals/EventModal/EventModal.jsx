import React from "react";
import "./EventModal.css";
import { useState, useEffect } from "react";

function EventModal({ isOpen, onClose, onEventAdded }) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      description: eventDescription,
      startdate: eventStartDate,
      starttime: eventStartTime,
      location: eventLocation,
    };
    console.log(newEvent);
    try {
      const respone = await fetch("https://localhost:7122/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      if (respone.ok) {
        setEventName("");
        setEventDescription("");
        setEventStartDate("");
        setEventStartTime("");
        setEventLocation("");
        onClose();
        onEventAdded();
      } else {
        alert("Error: ");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="event-modal">
        <div className="event-modal-header">
          <h2 className="event-modal-title">Add Event</h2>
          <button className="event-modal-close" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="event-modal-content">
          <form className="event-form" onSubmit={handleSubmit}>
            <div className="event-form-group">
              <label htmlFor="event-name">Event Name</label>
              <input
                type="text"
                id="event-name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-description">Description</label>
              <input
                type="text"
                id="event-description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-date">Event Date</label>
              <input
                type="date"
                id="event-date"
                value={eventStartDate}
                onChange={(e) => setEventStartDate(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-time">Event Time</label>
              <input
                type="time"
                id="event-time"
                value={eventStartTime}
                onChange={(e) => setEventStartTime(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-location">Event Location</label>
              <input
                type="text"
                id="event-location"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </div>
            <button type="submit" className="event-form-submit">
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EventModal;
