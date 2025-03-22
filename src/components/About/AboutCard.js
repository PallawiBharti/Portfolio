import React from "react";
import Card from "react-bootstrap/Card";
import { BsForward , BsFillMortarboardFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pallawi Bharti </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I'm a PHD Scholar at IIT(ISM) Dhanbad.
            <br />
            <br />
            <h1 style={{ fontSize: "1.4em", paddingBottom: "5px", paddingTop: "10px" }}>
              <BsFillMortarboardFill /><strong className="purple"> EDUCATION: </strong>
            </h1>
          </p>
          <ul>
            <li className="about-activity">
              <BsForward  /><span className="purple"> PHD: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward  /><span className="purple"> M.SC: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward  /><span className="purple"> B.SC: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward  /><span className="purple"> Intermediate: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward  /><span className="purple"> Matriculation: </span> IIT(ISM) Dhanbad
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
