import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import "../App.css";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const history = useHistory();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, work, add, mobile, desc, age } = inpval;

    const res = await fetch("https://crud049.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        add,
        mobile,
        desc,
        age,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      history.push("/");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div className="container">
      <NavLink to="/">
        <button className="button3">Home</button>
      </NavLink>
      <form>
        <div class="row">
          <div class="col-25">
            <label>Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>email</label>
          </div>
          <div class="col-75">
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Age</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Mobile</label>
          </div>
          <div class="col-75">
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Work</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={inpval.work}
              onChange={setdata}
              name="work"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Address</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={inpval.add}
              onChange={setdata}
              name="add"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Description</label>
          </div>
          <div class="col-75">
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>

        <button type="submit" onClick={addinpdata} className="button3">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
