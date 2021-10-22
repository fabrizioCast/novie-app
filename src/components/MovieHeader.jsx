import NavBar from "./NavBar";
import Lista from "./Menu";
import { useState } from "react";

const MovieHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return <NavBar setIsOpen={handleOpen} />;
};

export default MovieHeader;
