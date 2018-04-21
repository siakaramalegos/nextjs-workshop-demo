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
      `}</style>
    </div>
  )
}

export default Jumbotron
