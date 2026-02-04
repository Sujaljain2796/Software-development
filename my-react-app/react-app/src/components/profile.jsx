import { useState } from "react";

function Profile() {

  const person1 = {
    name: "Sujal Jain",
    age: 20   
  };

  const [message, setMessage] = useState("touch me!");
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("no , please stop");
    setMessage("You touched me ");
    setCount(count + 1);    }

  return (
    <div className="container">
      <h1>My name is {person1.name}</h1>
      <h2>I want to be placed in a good paying job</h2>
      <h3>Companies I want to work with are Google</h3>

      <button onClick={handleClick}>
        {message} — touched me {count} times
      </button>
    </div>
  );
}

export default Profile;
