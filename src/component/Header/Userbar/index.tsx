import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SAuthIcon, SUserbarLayout } from "./style";

export default function Userbar() {
  return (
    <SUserbarLayout>
      <SAuthIcon>
        <FaUserCircle size={30} color={"white"} />
      </SAuthIcon>
    </SUserbarLayout>
  );
}
