import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(
      `https://b-notebook.onrender.com/api/auth/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert(" Invalid Credentials", "danger");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-2 m-auto bg-white p-4 rounded">
      <h2>Create an account to use Notebook</h2>

      <form
        className="container border my-4 p-2 rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 p-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            onChange={onchange}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
          <label htmlFor="email" className="form-label my-1">
            Email address
          </label>
          <input
            name="email"
            type="email"
            onChange={onchange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={onchange}
              minLength={5}
              required
              className="form-control"
              id="Password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password{" "}
            </label>
            <input
              name="cpassword"
              type="password"
              onChange={onchange}
              minLength={5}
              required
              className="form-control"
              id="cpassword"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
