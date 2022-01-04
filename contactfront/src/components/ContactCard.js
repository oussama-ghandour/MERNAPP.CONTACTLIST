import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { deletecontact, getcontact, toogletrue } from "../redux/actions/Contactactions";
import { Link } from 'react-router-dom'

function ContactCard({contact}) {
  const dispatch = useDispatch()
  return (
    <div>
     

      <Card style={{ width: "18rem" }}>
       
        <Card.Body className="card-contact">
          
          <Card.Title>
            <h1 className="Contact-name"> {contact.name} </h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h1 className="Contact-age"> {contact.age} </h1>
          </Card.Subtitle>
          <Card.Text>
            <p className="Contact-info">
              For each new entry, the server sends an e-mail message to the
              contact asking for updated information
            </p>
          </Card.Text>
          <div className="btn-contact">
            <Link to={`/edit/${contact._id}`}>
              <button
                className="button-12"
                variant="primary"
                onClick={() => {
                  dispatch(toogletrue());
                  dispatch(getcontact(contact._id));
                }}
              >
                EDIT
              </button>
            </Link>

            <button
              class="button-12"
              variant="primary"
              onClick={() => dispatch(deletecontact(contact._id))}
            >
              DELETE
            </button>

            <Link to={`/contacts/${contact._id}`}>
              <button
                class="button-12"
                variant="primary"
                onClick={() => dispatch(getcontact(contact._id))}
              >
                DETAILS
              </button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactCard
