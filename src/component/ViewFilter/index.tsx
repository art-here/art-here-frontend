import React, { SetStateAction } from "react";
import { SFilterLayout } from "./ViewFilter.style";
import { GrGallery } from "react-icons/gr";
import { FiMap } from "react-icons/fi";

interface ViewFilterProps {
  setIsMap: React.Dispatch<SetStateAction<boolean>>;
}

export default function ViewFilter({ setIsMap }: ViewFilterProps) {
  return (
    <SFilterLayout>
      <button
        onClick={() => {
          setIsMap(false);
        }}
      >
        <GrGallery size={20} />
      </button>
      <button
        onClick={() => {
          setIsMap(true);
        }}
      >
        <FiMap size={20} />
      </button>
    </SFilterLayout>
  );
}
