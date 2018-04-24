import Container from './Container';

const getIdFromUrl = (url) => {
  const splitUrl = url.split('/')
  return splitUrl[splitUrl.length - 2]
}

const Films = ({ films }) => {
  const filmsList = films.map(film => {
    const { title, opening_crawl, url } = film
    const id = getIdFromUrl(url)

    return (
      <div className="film" key={id}>
        <h2>{title}</h2>
        <p>{opening_crawl}</p>
        <style jsx>{`
          .film {
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  })

  return (
    <Container>
      <h1>Films</h1>
      {filmsList}
    </Container>
  )
}

export default Films
