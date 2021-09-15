import Head from 'next/head';
import Home from '../src/Components/Home'


export default function Homepage() {
  return (
    <>
      <Head>
        <title>thiago vieira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </>
  )
}
