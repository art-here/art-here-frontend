import { useState } from "react";
import Search from "../../component/Search";
import ViewFilter from "../../component/ViewFilter";
import GalleryView from "./GalleryView";
import { SHomeLayout } from "./Home.style";
import MapView from "./MapView";

export default function Home() {
  const [isMap, setIsMap] = useState(false);
  return (
    <SHomeLayout>
      <Search />
      <ViewFilter setIsMap={setIsMap} />
      {!isMap ? <GalleryView /> : <MapView />}
    </SHomeLayout>
  );
}
