import Jumbotron from "../components/Jumbotron";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

const Home = () => (
  <div>
    <Meta />
    <Nav />
    <Jumbotron
      imageSrc="../static/galaxy.jpg"
      title="My Super Cool Star Wars App"
    />
  </div>
)

export default Home
