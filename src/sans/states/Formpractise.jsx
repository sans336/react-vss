import { useState } from "react";

const Formpractise = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name">User Name</label>
        <div className="input-element">
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="Enter your user name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name">Password</label>
        <div className="input-element">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Formpractise