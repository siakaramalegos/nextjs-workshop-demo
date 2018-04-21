const Jumbotron = ({ title, imageSrc, text }) => {
  const backgroundStyle = imageSrc
    ? `#ccc url(${imageSrc}) no-repeat center center`
    : `#ccc`

  return (
    <div className="root">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
      <style jsx>{`
        .root {
          color: white;
          background: ${backgroundStyle};
          background-size: cover;
          padding: 100px;
        }
        h1 {
          font-size: 3em;
          font-weight: 100;
        }
      `}</style>
    </div>
  )
}

export default Jumbotron
