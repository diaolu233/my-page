// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { Provider } from "react-redux";
import widthDva from "../utils/store";
import "babel-polyfill"
import App, { Container } from "next/app";
import React from "react";
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette ,typography} from '@material-ui/system';
const Box = styled('div')(compose(spacing, palette))
// import { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

// const Box = styled.div`${palette}${spacing}${typography}`;
// const Box = styled.div`
//   ${css(compose(spacing, palette))}
// `;
// const theme = createMuiTheme();
// const theme = {
//   spacing: 4,
//   palette: {
//     primary: '#f99',
//   },
// };


const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

// const getAccount = async ()=>{
//        const web3js = await metaMasks()
//                 // console.log(a)
//         web3js.eth.getAccounts(function(error, accounts) {
//         if (error) {
//             console.log(error);
//         }
    
//         const account  = accounts[0];
//         console.log(account)
        
//         })
// }

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      // 执行当前页面的getInitialProps
      let data = await Component.getInitialProps(ctx);
      pageProps = { ...data };
    }
    return { pageProps };
  }
  // getAccount()
 
  render() {
    const { Component, pageProps, dvaStore } = this.props;
    return (
      <Provider store={dvaStore}>
         <ThemeProvider theme={theme}>
          {/* <Component {...pageProps} /> */}
          <Box
          color="secondary.main"
          bgcolor="background.paper"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          // p={{ xs: 2, sm: 3, md: 4 }}
         >
          <Component {...pageProps} />
        </Box>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default widthDva(MyApp);


