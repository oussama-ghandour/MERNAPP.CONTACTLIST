import React from 'react'
import{ Navbar,Nav,Container } from 'react-bootstrap'
import { getcontacts, togglefalse } from '../redux/actions/Contactactions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function HomePage () {
  const dispatch = useDispatch()
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Contact LIST</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacts"
                onClick={() => dispatch(getcontacts())}
              >
                Contacts
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/addcontact"
                onClick={() => dispatch(togglefalse())}
              >
                Add Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default HomePage 
