import React from 'react'
import { useSelector } from "react-redux";
import { InputGroup } from "react-bootstrap";

function ContactDetails() {
    const contact = useSelector(state => state.ContactReducer.contact)
    return (
      <div className="contact-details">
        <InputGroup
          className="mb-3"
          style={{ width: "15%", marginTop: "150px", backgroundColor: "white" }}
        >
          <InputGroup.Text
            id="inputGroup-sizing-default"
            style={{ backgroundColor: "#158cba" }}
          >
            NAME
          </InputGroup.Text>
          <h1 style={{ marginLeft: "35px", marginTop: "5px", color: "black" }}>
            {contact.name}
          </h1>
        </InputGroup>
        <InputGroup
          className="mb-3"
          style={{ width: "10%", marginTop: "150px", backgroundColor: "white" }}
        >
          <InputGroup.Text
            id="inputGroup-sizing-default"
            style={{ backgroundColor: "#158cba" }}
          >
            AGE
          </InputGroup.Text>
          <h1 style={{ marginLeft: "35px", marginTop: "5px", color: "black" }}>
            {contact.age}
          </h1>
        </InputGroup>
        <InputGroup
          className="mb-3"
          style={{ width: "20%", marginTop: "150px", backgroundColor: "white" }}
        >
          <InputGroup.Text
            id="inputGroup-sizing-default"
            style={{ backgroundColor: "#158cba" }}
          >
            EMAIL
          </InputGroup.Text>
          <h1 style={{ marginLeft: "35px", marginTop: "5px", color: "black" }}>
            {contact.email}
          </h1>
        </InputGroup>
      </div>
    );
}

export default ContactDetails

