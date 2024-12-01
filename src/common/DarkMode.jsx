import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const change = () => {
    alert(isDarkMode ? "화이트모드" : "다크모드");
    setIsDarkMode((v) => {
      return !v;
    });
  };

  return (
    <button onClick={() => change()}>
      {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
    </button>
  );
};

export default DarkMode;
