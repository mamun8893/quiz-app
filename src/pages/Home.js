import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center home-app">
      <Button as="input" type="button" value="Start Quiz" size="lg" />
    </div>
  );
};

export default Home;
