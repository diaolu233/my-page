
import React from 'react'
import Table from '@/components/Table'
import Button from '@material-ui/core/Button';
import excel from '@/utils/excel'
import Search from '@/components/Search'
import Bar from '@/components/Bar'
import Select from '@/components/Select'
import Datepicker from '@/components/Datepicker'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
export default class Salesreport extends React.Component {
  

  state={
      rowsList:[
        {coin:'eth',newComputingPower:"1",newComputingPowerRatio:"1",newMiner:"1",proportionofNewMiningMachines:"1",printingAddresses:"1",newAddressRatio:"1"},
        {coin:'btc',newComputingPower:"1",newComputingPowerRatio:"1",newMiner:"1",proportionofNewMiningMachines:"1",printingAddresses:"1",newAddressRatio:"1"},
        {coin:'bsv',newComputingPower:"1",newComputingPowerRatio:"1",newMiner:"1",proportionofNewMiningMachines:"1",printingAddresses:"1",newAddressRatio:"1"},
        {coin:'bch',newComputingPower:"1",newComputingPowerRatio:"1",newMiner:"1",proportionofNewMiningMachines:"1",printingAddresses:"1",newAddressRatio:"1"}
      ],
      titleList : ["币种","周新增加算力","新增算力比例","新增矿机","新增矿机比例","新增打币地址数","新增地址比率"],
      coin:'btc',
      startTime:'1',
      endTime:'1'
  }
  createExcel = async () =>{
    excel()
  }
  handleExport = ()=>{

  }
  changeDate = (value) => (e) => {
      console.log(value)
      if(value === 'start'){
          this.setState({
            startTime:e.target.value
          })
      }else if(value === 'end'){
        this.setState({
            endTime:e.target.value
          })
      }
  }
  selectCoin = (event) => {
    this.setState({
        coin:event.target.value
    })
  }
  search = () => {
     console.log(1)
  }

  
  render() {
    const {coin} = this.state
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
         
                <Bar>
             
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Select selectCoin = {this.selectCoin} coin={coin}></Select> 
                        <Datepicker label="开始日期" changeDate={this.changeDate('start')} key="start"></Datepicker>
                        <Datepicker label="结束日期" changeDate={this.changeDate('end')} key="end"></Datepicker>
                        <IconButton type="submit" style={{padding: 10}} aria-label="search" onClick={this.search}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Button color="primary" variant="contained" onClick={this.createExcel}>导出</Button>
                </Bar>
                <Table rowsList={this.state.rowsList} titleList={this.state.titleList}></Table>
            </Container>
        </React.Fragment>
    )
  }
}