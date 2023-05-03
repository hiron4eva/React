import { useState } from "react";

export default function InputCapture() {
  const [userName, setUserName] = useState("");
  const [caps, setCaps] = useState('')

  const handleClick = (e) => {
    setUserName(e.target.value);
  };
  const upperCase = () => {
    setCaps(userName.toUpperCase());
  };
  const lowerCase = () => {
    setCaps(userName.toLowerCase());
  };

  return (
    <div>
      <label>
        <input onChange={handleClick} /> Enter your Username{" "}
      </label>
      <br />
      {userName !== "" && <h1> Welcome {userName}</h1>}
      <br />

      <button onClick={upperCase}>Upper</button>
      <button onClick={lowerCase}>Lower</button>
      <h1>{caps}</h1>
    </div>
  );
}
