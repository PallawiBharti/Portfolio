import React from "react";
import Card from "react-bootstrap/Card";
import { BsForward } from "react-icons/bs";

function PublicationsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <ul>
            <h2 className="purple">Coming Soon...</h2>
            {/* <li className="about-activity">
              <BsForward /><span className="purple"> PHD: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward /><span className="purple"> M.SC: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward /><span className="purple"> B.SC: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward /><span className="purple"> Intermediate: </span> IIT(ISM) Dhanbad
            </li>
            <li className="about-activity">
              <BsForward /><span className="purple"> Matriculation: </span> IIT(ISM) Dhanbad
            </li> */}
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default PublicationsCard;
