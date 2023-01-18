import { useState } from "react";
import Search from "../../component/Search";
import ViewFilter from "../../component/ViewFilter";
import Gallery from "./Gallery";
import { SHomeLayout } from "./home.style";
import Map from "./Map";

export default function Home() {
  const [isMap, setIsMap] = useState(false);
  return (
    <SHomeLayout>
      <Search />
      <ViewFilter setIsMap={setIsMap} />
      {!isMap ? <Gallery /> : <Map />}
    </SHomeLayout>
  );
}
