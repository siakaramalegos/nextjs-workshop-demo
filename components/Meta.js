import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Star Wars is Cool"</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        font-family: Arial;
        margin: 0;
      }
    `}</style>
  </div>
)
