import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  // initialize context, use context hook
  const contactContext = useContext(ContactContext); // gives access to any action associated with the contact context

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <h4>{contact.name}</h4>
      ))}
    </Fragment>
  );
};

export default Contacts;
