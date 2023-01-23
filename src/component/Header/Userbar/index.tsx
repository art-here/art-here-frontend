import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SAuthIcon } from "./Userbar.style";

export default function Userbar() {
  return (
    <SAuthIcon>
      <FaUserCircle size={30} color={"white"} />
    </SAuthIcon>
  );
}
