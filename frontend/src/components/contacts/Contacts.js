import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  // initialize context, use context hook
  const contactContext = useContext(ContactContext); // gives access to any action associated with the contact context

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
