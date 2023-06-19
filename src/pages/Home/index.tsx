import useRouter from "../../hooks/useRouter";
import HomeView from "./View";

const Home = () => {
  const { path } = useRouter();
  const isArtGallery = path === "/art";

  return <HomeView isArtGallery={isArtGallery} />;
};

export default Home;
