import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Login(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const onChangeHandler = e => {
    setInput({
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <form>
        <label>Username: </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={onChangeHandler}
          value={input.username}
          required
        />
        <label>Password: </label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
          value={input.password}
          required
        />
        <input type="submit">Login</input>
      </form>
    </>
  );
}
