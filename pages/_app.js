import GlobalStyle from "../src/styles/GlobalStyle"
import Div100vh from 'react-div-100vh'
 

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  ) 
}

export default MyApp
