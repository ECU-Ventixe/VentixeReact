import "./BookingModal.css";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

function BookingModal({ openBooking, onClose, event }) {
  const { getUserId } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    eventId: event.id,
    userId: getUserId(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    postalCode: "",
    address: "",
    ticketQuantity: 1,
  });

  const postBooking = async () => {
    try {
      const response = await fetch(
        `https://ventixe-booking-ecu-bparahc2haebbfbz.swedencentral-01.azurewebsites.net/api/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    } catch (error) {
      console.error("Error posting booking:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "ticketQuantity") {
      setQuantity(Number(value));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postBooking();
    onClose();
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`booking-modal ${openBooking ? "open" : ""}`}>
      <div className="modal-content">
        <div className="booking-modal-header">
          <h2>Book Event: {event.eventName}</h2>
          <button className="booking-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="booking-input"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="booking-form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="booking-input"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="booking-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="booking-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="booking-form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="booking-input"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="booking-form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              className="booking-input"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <div className="booking-form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              className="booking-input"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                handleInputChange(e);
              }}
            />
          </div>
          <label>Tickets:</label>
          <input
            type="number"
            name="ticketQuantity"
            className="booking-input"
            min="1"
            value={quantity}
            onChange={handleInputChange}
          />
          <button className="booking-submit" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default BookingModal;
