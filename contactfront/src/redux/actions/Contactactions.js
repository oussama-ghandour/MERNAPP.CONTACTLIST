import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes";
import axios from 'axios'


//METHOD GET CONTACTS
export const getcontacts=()=> async (dispatch)=>{
    try {
        //Get data from back
        const res = await axios.get('/contacts');
        //Get data from reducer
        dispatch({ type:GET_CONTACTS, payload: res.data })
        console.log(res.data)
    } catch (error) {
        console.log(error)
        
    }

}

//METHOD ADD CONTACT

export const addcontact=(newContact, navigate)=> async(dispatch)=> {
    try {
        const res = await axios.post("/contacts/addContact", newContact);
        dispatch(getcontacts())
        navigate('/contacts')
    } catch (error) {
        console.log(error)
    }
}

//METHOD DELETE CONTACT
export const deletecontact = (id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/contacts/deleteContact/${id}`);
        dispatch(getcontacts())
    } catch (error) {
        console.log(error)
        
    }
}


//METHODE GET CONTACT BY ID
export const getcontact = (id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/contacts/${id}`);
        dispatch( { type: GET_CONTACT, payload:res.data })
    } catch (error) {
         console.log(error)
        
    }
}


export const toogletrue=()=>{
    return{type:TOGGLE_TRUE}
}
export const togglefalse=()=>{
    return{type:TOGGLE_FALSE}
}

export const editcontact=(id, updatecontact, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.put(
          `/contacts/updateContact/${id}`,
          updatecontact
        );
        dispatch(getcontacts())
        navigate("/contacts");
        
    } catch (error) {
        console.log(error)
        
    }
}