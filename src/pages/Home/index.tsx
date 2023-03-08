import Cookies from "js-cookie";
import HomeView from "./View";

const Home = () => {
  console.log(document.cookie);
  return <HomeView />;
};

export default Home;
