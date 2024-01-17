import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notecontext } from "../context/NoteState";

function Login(props) {
  const{changeMode}=useContext(notecontext)

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://b-notebook.onrender.com/api/auth/login `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      props.showAlert(" Invalid Details", "danger");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div style={changeMode} className="mt-4  m-auto  p-4 rounded">
      <h2>Login to continue Notebook</h2>
        <form className="my-4 border p-3 rounded" onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="email">Email address</label>
            <input
            style={changeMode}
              type="email"
              name="email"
              className="form-control my-2"
              id="email"
              value={credentials.email}
              onChange={onchange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                        style={changeMode}

              type="password"
              name="password"
              className="form-control my-2"
              id="password"
              value={credentials.password}
              onChange={onchange}
              aria-describedby="emailHelp"
              placeholder="Enter password"
            />
          </div>

          
          <button type="submit" className="btn btn-primary my-2 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
