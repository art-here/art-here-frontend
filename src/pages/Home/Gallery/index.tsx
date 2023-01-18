import React from "react";
import { SGalleryLayout } from "./gallery.style";
import ThumbNail from "./ThumbNail";

export default function Gallery() {
  return (
    <SGalleryLayout>
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
      <ThumbNail photoURL="http://picsum.photos/400/300" title="sample" />
    </SGalleryLayout>
  );
}
