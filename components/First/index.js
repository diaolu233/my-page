// import React from 'react';
// // import styles from './index.less'
// import "./index.less"
// import Button from '@material-ui/core/Button';
// import { compose, spacing, palette, css ,typography} from '@material-ui/system';
// import { createMuiTheme } from '@material-ui/core/styles';
// import styled, { ThemeProvider } from 'styled-components';
// // import { green } from '@material-ui/core/colors';

// export default function First(props) {
// //   const classes = useStyles();
// //   const [age, setAge] = React.useState('');

// //   const handleChange = (event) => {
// //     setAge(event.target.value);
// //   };
// // console.log(styles)
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#f99',
//     },
//     secondary: {
//       main:'#f99',
//     },
//   },
// });
//   return (

//     <ThemeProvider theme={theme}>
//       <Button variant="contained" color="primary">
//         Primary
//       </Button>
//     </ThemeProvider>
   

//   );
// }
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {metaMasks} from '@/utils/metaMask'
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
// console.log(getAcount())
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });

 function First(props) {
//  const x =  metaMask()
//    console.log(x)
  // console.log(props)
  return (
    // <ThemeProvider theme={theme}>
      // <Button color="primary">Primary</Button>
      <Button variant="contained" color="secondary" onClick={metaMasks} >
         <div style={{textTransform: "capitalize",fontSize:'0.16rem'}}>connect</div> 
      </Button>
    // </ThemeProvider>
    // <div>123</div>
  );
}
export default connect(({index}) => {
  return {
    index
  };
})(First);