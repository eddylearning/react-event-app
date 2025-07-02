import React from "react";
import "../styles/EventCard.css"; // Import CSS styles

/**
 * Displays an event card.
 * @param {Object} event - Event data (name, date, description).
 */
const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2> {/* Event title */}
      <p>{event.date}</p> {/* Event date */}
      <p>{event.description}</p> {/* Event description */}
    </div>
  );
};

