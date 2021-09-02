import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./About.scss";

const About: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <h1>About</h1>
        <p>
          This template is a quick start for React App with React Router, Redux,
          TypeScript and custom ESlint configurations.
        </p>
        <button type="button" className="btn" onClick={() => history.push("/")}>
          Go back
        </button>
      </div>
    </>
  );
};

export default About;
