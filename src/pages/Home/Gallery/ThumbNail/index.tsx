import React from "react";
import { SThumbNail, SThumbNailLayout } from "./thumbnail.style";

interface ThumbNailProps {
  photoURL: string;
  title: string;
}

export default function ThumbNail({ photoURL, title }: ThumbNailProps) {
  return (
    <SThumbNailLayout>
      <SThumbNail src={photoURL} alt={title} />
    </SThumbNailLayout>
  );
}
