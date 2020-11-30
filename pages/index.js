import React from 'react';
import { connect } from 'react-redux';
import Salesreport from './salesReport'
import First from "./first"
// import WithDva from '../utils/store';
import Test from './test'
import {metaMasks} from '@/utils/metaMask'

class Home extends React.Component {
  componentDidMount= async()=>{
    // metaMask()
        const web3js = await metaMasks()
            // console.log(a)
        web3js.eth.getAccounts((error, accounts)=> {
        if (error) {
            console.log(error);
        }
    
        const account  = accounts[0];
        this.props.dispatch({
          type:'index/updateState',
          payload: {
            account
          }
        })




      //   type: 'global/getAccountInfo',
      // params: {
      //   pathname: '/hedging'
      // }
        
        })
}
  render(){
    console.log(this.props.index.account)
    return(
    <First></First>
    )
  
    
  }
 
}
// export default connect(({index}) => {
//   return {
//     index
//   };
// })(Home);
// export default Home

export default connect(({index}) => {
  return {
    index
  };
})(Home);
// export default WithDva((state) => { return { index: state.index }; })(Home);