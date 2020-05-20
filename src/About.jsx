import React, { useState } from "react";
const About = () => {
  const [age, setAge] = useState(0);

  const increase = () => {
    setAge(age + 1);
  };

  const decrease = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>{age}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
export default About;
