import GlobalStyle from "../src/styles/GlobalStyle"
 

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  ) 
}

export default MyApp
