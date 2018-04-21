import fetch from 'isomorphic-unfetch'
import Page from "../layouts/Main";
import Container from '../components/Container';

const FilmsPage = ({ title, opening_crawl, episode_id, director, producer, release_date }) => {
  const date = new Date(release_date)

  return (
    <Page>
      <Container>
        <h1>{title}, Episode {episode_id}</h1>
        <p>Directed by {director}</p>
        <p>Produced by {producer}</p>
        <p>{opening_crawl}</p>
        <p>Released {date.toDateString()}</p>
      </Container>
    </Page>
  )
}

FilmsPage.getInitialProps = async function ({ query }) {
  const res = await fetch(`https://swapi.co/api/films/${query.id}`)
  const film = await res.json()

  return { ...film }
}

export default FilmsPage
