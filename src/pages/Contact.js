import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });
  // Handle input changes
  const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;

    if (name === "name") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };
  // Generate a string containing all the error messages
  const showError = (e) => {
    if (e.target.name === "name" && username.trim() === "") {
      setError((prev) => ({ ...prev, nameError: "Name cannot be Empty" }));
    }
    if (e.target.name === "email" && email.trim() === "") {
      setError((prev) => ({ ...prev, emailError: "Email cannot be Empty" }));
    }
    if (e.target.name === "message" && message.trim() === "") {
      setError((prev) => ({
        ...prev,
        messageError: "Message cannot be Empty",
      }));
    }
    console.log("username is :", username, email, message, ": empty");
    console.log("FOCUS out", error);
  };

  const [errorString, setErrorString] = useState("");
  useEffect(() => {
    const dump =
      error.nameError + "\n" + error.emailError + "\n" + error.messageError;
    setErrorString(dump);
  }, [error]);

  return (
    <div className="contactPage">
      <div className="wrap">
        <h1 className="ContactH1">
          Send <span>me</span> a message!
        </h1>
        <div className="formWrap">
          <form>
            <p>Hello Terry,</p>
            <label htmlFor="message"> Your message:</label>
            <label htmlFor="message" className="error">
              {errorString.split("\n")[2]}
            </label>
            <textarea
              onChange={handleInputChange}
              name="message"
              id="message"
              value={message}
              onBlur={showError}
            ></textarea>
            <p>Best,</p>
            <label htmlFor="name">Name:</label>
            <label className="error">{errorString.split("\n")[0]}</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              onBlur={showError}
              value={username}
              id="name"
            ></input>
            <div className="labelWrap">
              <label htmlFor="email">Email:</label>
              <label htmlFor="email" className="error">
                {errorString.split("\n")[1]}
              </label>
            </div>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              onBlur={showError}
              value={email}
              id="email"
            ></input>
            <input type="submit" name="email" value={"Send"} id="email"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
