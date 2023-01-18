import { SMapLayout } from "./map.style";
import MapInfo from "./MapInfo";
import MapView from "./MapView";

export default function Map() {
  return (
    <SMapLayout>
      <MapView />
      <MapInfo />
    </SMapLayout>
  );
}
