import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import Logo from "./../../components/logo.png";
import "./navigation.css";

import { animateScroll as scroll } from "react-scroll";
import { Dropdown } from "react-bootstrap";
require("dotenv").config();
const Navigation = ({ setHomePageSection }) => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  let token = localStorage.getItem("token");
  let role_id = localStorage.getItem("role_id");
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
      </div>
      <div className="nav">
        <ul>
          {role_id == 3 ? (
            <></>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/" className="links">
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/doctor" className="links">
                  Our nutritionist
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role_id == 1 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/mydoctor" className="links">
                      My Doctor
                    </Link>{" "}
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      style={{
                        backgroundColor: "#fff",
                        borderColor: "#fff",
                        color: "#52585c",
                        marginTop: "-6px",
                        fontWeight: "550",
                        fontSize: "1.2rem",
                      }}
                    >
                      Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/create/stories" className="links">
                          Your story
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/foodtracker" className="links">
                          Your Food
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/userSchedule" className="links">
                          My Schedule
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/profile" className="links">
                          Profile
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          localStorage.clear();
                        }}
                      >
                        <Link to="/" className="links">
                          Log out
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/logIn" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role_id == 2 ? (
                <>
                  <li>
                    <Link to="/mypatient" className="links">
                      My patient
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/booking" className="links">
                      Booking schedule
                    </Link>{" "}
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        style={{
                          backgroundColor: "#fff",
                          borderColor: "#fff",
                          color: "#52585c",
                          marginTop: "-6px",
                          fontWeight: "550",
                          fontSize: "1.2rem",
                        }}
                      >
                        Profile
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to="/doctorProfile" className="links">
                            Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            localStorage.clear();
                          }}
                        >
                          <Link to="/" className="links">
                            Log out
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {token ? (
            <>
              {role_id == 3 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/accept" className="links">
                      Accept doctor
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/doctor" className="links">
                      nutritionist
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
