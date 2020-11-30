import React from 'react'
import First from '@/components/First'
import {metaMasks} from '@/utils/metaMask'
export default class Salesreport extends React.Component {
    // componentDidMount= async()=>{
    //     // metaMask()
    //         const web3js = await metaMasks()
    //             // console.log(a)
    //         web3js.eth.getAccounts(function(error, accounts) {
    //         if (error) {
    //             console.log(error);
    //         }
        
    //         const account  = accounts[0];
    //         console.log(account)
            
    //         })
    // }
    // getMetaMask = ()=>{
    //     metaMask()
    // //   console.log(acount)
    // }


    render(){
        return (
            <First></First>
        )
        
    }
}