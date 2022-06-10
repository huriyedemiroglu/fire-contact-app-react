import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import { addInfoToDatabase, editInfoInDatabase } from './utils/functions';
import { ToastContainer } from "react-toastify";

const initialInfo = {
  username: "",
  phoneNumber: "",
  gender: "NO INFO"
}

function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id){
      editInfoInDatabase(info)
    }
    else {addInfoToDatabase(info)}
    setInfo(initialInfo);
  }
  const editHandler = (id, username, phoneNumber,gender) => {
    setInfo({id, username, phoneNumber, gender})
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler={editHandler}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
