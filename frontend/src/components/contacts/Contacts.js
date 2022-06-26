import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  // initialize context, use context hook
  const contactContext = useContext(ContactContext); // gives access to any action associated with the contact context

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h5>please add a contact</h5>;
  }

  return (
    // if filtered is not null, map through and show contact item, else show contacts
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
