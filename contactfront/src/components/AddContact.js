import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { addcontact, editcontact } from "../redux/actions/Contactactions";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
function AddContact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contact = useSelector(state => state.ContactReducer.contact)
    const edit = useSelector(state => state.ContactReducer.edit)
    useEffect(() => {
     if(edit) {setName(contact.name); setAge(contact.age); setEmail(contact.email)} else {
       setName('');
       setAge(0);
       setEmail('');
     }
    }, [])
    return (
      <div>
        <Card
          style={{
            border: "solid 1px black",
            marginTop: "70px",
            width: "70%",
            marginLeft: "200px",
            borderRadius: " 10px 10px 10px 10px",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75",
            backgroundColor: "#89a6b1",
            width: "65%",
          }}
        >
          <div >
            <p style={{ fontSize:"25px", textAlign:"center", width:"70%", marginLeft:"180px", fontWeight:"bold", marginTop:"30px"}}>
              For each new entry, the server sends an e-mail message to the
              contact asking for updated information
            </p>
            <Form
              style={{ paddingTop: "100px", width: "50%", marginLeft: "28%" }}
              className="add-contact"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  style={{
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  Email address
                </Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter Your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  style={{
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label
                  style={{
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  AGE
                </Form.Label>
                <Form.Control
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  type="number"
                  placeholder="Your Age"
                />
              </Form.Group>
              {edit ? (
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      editcontact(contact._id, { name, age, email }, navigate)
                    );
                  }}
                  type="submit"
                  style={{
                    color: "white",
                    marginLeft: "190px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  SUBMIT
                </Button>
              ) : (
                <button
                  class="button-4"
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addcontact({ name, age, email }, navigate));
                  }}
                  type="submit"
                >
                  Add Contact
                </button>
              )}
            </Form>
          </div>
        </Card>
      </div>
    );
}

export default AddContact
