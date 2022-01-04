
import './App.css';
import ContactList from './components/ContactList';
import HomePage from './components/NavBar';
import { Route, Routes } from 'react-router-dom'
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';
import "./Css/style.css";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/contacts' element={<ContactList></ContactList>} />
        <Route path='/addcontact' element={<AddContact></AddContact>} />
        <Route path='/contacts/:id' element={<ContactDetails></ContactDetails>}/>
        <Route path='/edit/:id' element={<AddContact></AddContact>} />
       
      </Routes>
    
    </div>
  );
}

export default App;
