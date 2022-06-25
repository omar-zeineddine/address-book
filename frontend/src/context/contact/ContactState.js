import React, { useReducer, useContext } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT } from "../types";

import { v4 as uuidv4 } from "uuid";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "doe@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "jane doe",
        email: "jane@gmail.com",
        phone: "222-222-2222",
        type: "professional",
      },
    ],
  };

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
