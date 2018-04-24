import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

export default () => (
  <div>
    <Head>
      <title>Star Wars is Cool"</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" type="text/css" href="../static/nprogress.css" />
    </Head>
    <style jsx global>{`
      body {
        font-family: Arial;
        margin: 0;
      }
    `}</style>
  </div>
)
