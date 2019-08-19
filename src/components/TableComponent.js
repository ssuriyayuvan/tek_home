import React, { Component } from 'react';
import _ from 'underscore';
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import { tableDataRecv } from '../appRedux/action'
import { bindActionCreators } from 'redux'


class TableComponent extends Component {

    state = {
        content: [],
        col: [],
        sortedInfo: null,
        keys: []
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortedInfo: sorter,
        });
    };

    componentWillReceiveProps(p) {
        const { data } = p.data
        if (data.tableData) {
            this.setState({ keys: _.keys(data.tableData.length > 0 ? data.tableData[0] : ''), content: data.tableData })
        }
    }

     componentDidMount(){
        const { data } = this.props.data
        if (data) {
            this.setState({ keys: _.keys(data.tableData.length > 0 ? data.tableData[0] : ''), content: data.tableData })
        }
     }
      

    render() {
        let { sortedInfo } = this.state;
        var col = [];
        sortedInfo = sortedInfo || {};
        this.state.keys.map(item => {
            col.push({
                title: item, dataIndex: item, key: item, sorter: (a, b) => a[item].localeCompare(b[item]), sortOrder: sortedInfo.columnKey === item && sortedInfo.order,
            })
        })
        return (
            <div>
                <Table pagination={false} columns={col} bordered dataSource={this.state.content} onChange={this.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.table }
}

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({ tableDataRecv }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);