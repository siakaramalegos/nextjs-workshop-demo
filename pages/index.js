import Jumbotron from "../components/Jumbotron";
import Page from "../layouts/Main";
import Films from "../components/Films";
import fetch from 'isomorphic-unfetch';

const Home = ({ films }) => (
  <Page>
    <Jumbotron
      imageSrc="../static/galaxy.jpg"
      title="My Super Cool Star Wars App"
    />
    <Films films={films} />
  </Page>
)

Home.getInitialProps = async function () {
  const res = await fetch('https://swapi.co/api/films/')
  const data = await res.json()
  const films = data.results

  console.log(`${data.count} films fetched`)
  return { films }
}

export default Home
