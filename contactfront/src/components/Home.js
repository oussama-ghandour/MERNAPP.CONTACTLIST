import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { getcontacts, addcontact } from "../redux/actions/Contactactions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Home() {
  const dispatch = useDispatch();
  
  

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome To Our Home Page</h1>
      <p>
        For each new entry, the server sends an e-mail message to the contact
        asking for updated information
      </p>
      <Link to="/contacts">
        <div className="icon-contact">
          <h1
            style={{
              fontSize: "30px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              fontWeight: "bold",
            }}
          >
            Contacts
            <FaAddressBook
              size="2em"
              color="blue"
              onClick={() => dispatch(getcontacts())}
            ></FaAddressBook>
          </h1>
        </div>
      </Link>
      <Link to="/addcontact">
        <div className="icon-add">
          <h1
            style={{
              fontSize: "30px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              fontWeight: "bold",
            }}
          >
            Add Contact
            <HiUserAdd
              size="2em"
              color="blue"
              onClick={() => dispatch(addcontact())}
            ></HiUserAdd>
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;
