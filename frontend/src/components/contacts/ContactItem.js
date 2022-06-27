import React from "react";
import PropTypes from "prop-types";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  useContacts,
  deleteContact,
  setCurrent,
  clearCurrent,
} from "../../context/contact/ContactState";

const ContactItem = ({ contact }) => {
  // contact dispatch without state
  const contactDispatch = useContacts()[1];

  const { _id, name, email, phone, lat, long, type } = contact;

  const onDelete = () => {
    deleteContact(contactDispatch, _id);
    clearCurrent(contactDispatch);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
        {lat && long && (
          <li>
            <i className="fas fa-location" /> {lat}, {long}
          </li>
        )}
      </ul>
      {/* test */}
      {/* <p className="contactLocationTitle">Location</p>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[listing.geolocation.lat, listing.geolocation.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />

        <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
          <Popup>{listing.location}</Popup>
        </Marker>
      </MapContainer> */}

      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contactDispatch, contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
