import { useState } from "react";
import HomePage from "./HomePage.jsx";
import "./SignUp.css";

export default function SignUp() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [registration, setRegistration] = useState(false);

  function SubmitHandler(e) {
    e.preventDefault();

    if (fName === "" || lName === "" || age <= 0 || email === "") {
      setMessage("Error: Enter all fields correctly");
      setRegistration(false);
    } else {
      console.log("working");
      setRegistration(true);
    }
  }
  if (registration) {
    return <HomePage />;
  }

  return (
    <div className="App">
      <div className="signup-form">
        <h2>Signup</h2>
      </div>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
      <div className={message ? (registration ? "success" : "error") : ""}>
        {message}
      </div>
    </div>
  );
}
