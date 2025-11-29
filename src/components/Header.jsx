import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div id="header">
      <div className="flexrow-container">
        <div className="standard-theme theme-selector" onClick={() => changeTheme("standard")} />
        <div className="light-theme theme-selector" onClick={() => changeTheme("light")} />
        <div className="darker-theme theme-selector" onClick={() => changeTheme("darker")} />
      </div>
      <h1 id="title" className={theme === "darker" ? "darker-title" : ""}>
        Just do it.<div id="border" />
      </h1>
    </div>
  );
}
