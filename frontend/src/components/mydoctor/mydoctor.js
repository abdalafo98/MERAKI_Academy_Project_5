import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const MyDoctor = () => {
  let token = localStorage.getItem("token");

  const [result, setResult] = useState([]);
  const [sa, setSa] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mydoctor", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
        setResult(result.data);
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {result.map((element, index) => {
        return (
          <div>
            <p> {element.img}</p>
            <p> {element.firstName}</p>
            <p> {element.lastName}</p>
            <p> {element.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyDoctor;
