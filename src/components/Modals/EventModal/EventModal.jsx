import React from "react";
import "./EventModal.css";
import { useState, useEffect } from "react";

function EventModal({ isOpen, onClose, onEventAdded }) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [ticketStartDate, setTicketStartDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventState, setEventState] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventStartDate: eventStartDate,
      eventEndDate: eventEndDate,
      ticketStartDate: ticketStartDate,
      location: eventLocation,
      city: eventCity,
      state: eventState,
    };
    console.log(newEvent);
    try {
      const respone = await fetch("https://localhost:7121/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      if (respone.ok) {
        const data = await respone.json();
        setEventName("");
        setEventDescription("");
        setEventStartDate("");
        setEventEndDate("");
        setTicketStartDate("");
        setEventLocation("");
        setEventCity("");
        setEventState("");
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
                type="datetime-local"
                id="event-date"
                value={eventStartDate}
                onChange={(e) => setEventStartDate(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-time">Event Time</label>
              <input
                type="datetime-local"
                id="event-time"
                value={eventEndDate}
                onChange={(e) => setEventEndDate(e.target.value)}
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
            <div className="event-form-group">
              <label htmlFor="event-city">Event City</label>
              <input
                type="text"
                id="event-city"
                value={eventCity}
                onChange={(e) => setEventCity(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="event-state">Event State</label>
              <input
                type="text"
                id="event-state"
                value={eventState}
                onChange={(e) => setEventState(e.target.value)}
              />
            </div>
            <div className="event-form-group">
              <label htmlFor="ticket-start-date">Ticket Start Date</label>
              <input
                type="datetime-local"
                id="ticket-start-date"
                value={ticketStartDate}
                onChange={(e) => setTicketStartDate(e.target.value)}
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
