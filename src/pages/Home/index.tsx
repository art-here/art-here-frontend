import Cookies from "js-cookie";
import HomeView from "./View";

const Home = () => {
  const webId = Cookies.get("webid");
  console.log(webId);
  return <HomeView />;
};

export default Home;
