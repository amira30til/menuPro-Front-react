import { useState } from "react";
import axios from "axios";
import logoo from "@assets/logoo.png";
import './delete.css';

const Delete = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [deleteWithData, setDeleteWithData] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDeleteAccountChange = () => {
    setDeleteAccount(!deleteAccount);
  };

  const handleDeleteWithDataChange = () => {
    setDeleteWithData(!deleteWithData);
  };

  const handleButtonClick = async () => {
    try {
      // example : http://apiUrl/api/users/<email>?deletedAccount=true&deleteWithData=false
      const response = await axios.delete(`/api/users/${email}`, {
        params : {
          deleteAccount : deleteAccount,
          deleteWithData : deleteWithData
        }
      });

      console.log(response.data);
      // Handle success or show a success message to the user
    } catch (error) {
      console.error(error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <div className="contact-container">
        <img src={logoo} alt="Logo" className="logo" />
        <h2 className="page-title">Delete User Account</h2>
        <div className="input-container">
          <input
            placeholder="Insert your email here"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Insert your password here"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={deleteAccount}
            onChange={handleDeleteAccountChange}
          />
          <label className="checkbox-label">Delete Account</label>
          <input
            type="checkbox"
            checked={deleteWithData}
            onChange={handleDeleteWithDataChange}
          />
          <label className="checkbox-label">Delete Account with Data</label>
        </div>
        <button className="submit-button" onClick={handleButtonClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Delete;
