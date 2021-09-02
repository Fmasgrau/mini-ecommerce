import React, { Fragment } from "react";
import Counter from "../../features/counter/Counter";
import "./Home.scss";

const Home: React.FC = () => (
  <>
    <div>
      <h1>Hello Bravo!</h1>
      <p>
        Here is an example of state management with redux, feel free to copy or
        replace the code with yours :)
      </p>
      <Counter />
    </div>
  </>
);
export default Home;
