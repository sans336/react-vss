import { useState } from "react";
const Childpopup = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const FirstNameChange = (e) => {
      setFirstName(e.target.value );
      
  };

  const LastNameChange = (e) => {
    setLastName(e.target.value)
    };
        
    const handleSubmit = () => {
     const Data = {
     firstName,
     lastName,
    };
    console.log('Data:', Data);
  };
    const handleCancel = () => {
       onClose();
  }
  return (
    <div>
      <h2>Enter Your Information</h2>
      <label>
        First Name:
        <input type="text" placeholder="fname" onChange={FirstNameChange} />
      </label>
     
      <label>
        Last Name:
        <input type="text" placeholder="lname" onChange={LastNameChange} />
      </label>
    
      <button  onClick={handleSubmit}>Submit</button>
      <button  onClick ={handleCancel}>Cancel</button>
    </div>
  );
};
export default Childpopup;
