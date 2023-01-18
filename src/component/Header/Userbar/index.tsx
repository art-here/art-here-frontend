import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SAuthIcon } from "./userbar.style";

export default function Userbar() {
  return (
    <SAuthIcon>
      <FaUserCircle size={30} color={"white"} />
    </SAuthIcon>
  );
}
