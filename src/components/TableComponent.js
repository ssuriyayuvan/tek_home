import React,{Component} from 'react';
import _ from 'underscore';
import {Table,Button} from 'antd'
import ReactTable from 'react-table'


class TableComponent extends Component {

    state={
        content:[],
        col:[],
        sortedInfo:null,
        keys:[]
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          sortedInfo: sorter,
        });
      };

    componentDidMount(){
        // console.log(this.props)
        this.setState({
            keys:_.keys(this.props.data[0])
        })       
    }

    
    render(){
        let { sortedInfo } = this.state;
        var col = [];
        sortedInfo = sortedInfo || {};
        console.log(sortedInfo)
        this.state.keys.map(item=>{
            col.push({title:item,dataIndex:item,key:item,sorter: (a, b) =>  a[item].localeCompare(b[item]),sortOrder: sortedInfo.columnKey === item && sortedInfo.order,
            })}) 
          
        return(
            <div>
                <Table pagination={false} columns={col} bordered dataSource={this.props.data} onChange={this.handleChange} />
            </div>
        )
    }
}

export default TableComponent;