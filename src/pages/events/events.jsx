import React from "react";
import "./events.css";
import { useState, useEffect } from "react";
import EventModal from "../../components/Modals/EventModal/EventModal";
import EventCard from "../../components/Cards/EventCard/EventCard";

function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://ventixe-event-ecu-dvddbqcpewahfdcz.swedencentral-01.azurewebsites.net/api/event"
      );
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="events">
      <div className="events-header">
        <div className="events-status">
          <span>Active (0)</span>
          <span>Draft (0)</span>
          <span>Past (0)</span>
        </div>
        <div className="events-add">
          <button
            className="add-event-button"
            onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-light fa-plus"></i>
            <span>Add Event</span>
          </button>
        </div>
        <EventModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onEventAdded={fetchEvents}
        />
      </div>
      <div className="events-content">
        <div className="event-card-container">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Events;
