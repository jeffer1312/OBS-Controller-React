//import '../ReactotronConfig';
import '../styles/globals.css';
import '../styles/modal.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
//

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Grid
        height='100vh'
        templateColumns='1fr 1fr 1fr 1fr'
        templateRows=' auto auto auto'
        templateAreas="   
      '. titleCena titleCena .'      
      'buttonCenas buttonCenas buttonCenas buttonCenas'      
      'footer footer footer footer'      "
        justifyContent='center'
        alignItems='start'
        backgroundColor='##F7FAFC'
      >
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
