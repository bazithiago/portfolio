import Head from 'next/head'
import GlobalStyle from '../src/GlobalStyle'

export default function Home() {
  return (
    <>
      <Head>
        <title>thiago vieira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" /> */}
      </Head>
      <GlobalStyle />
      <h1>Hello world</h1>

    </>
  )
}
