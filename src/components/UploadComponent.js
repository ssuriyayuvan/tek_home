import React, { Component } from 'react'
// import FileUploadProgress  from 'react-fileupload-progress';
import axios from "axios"
import {Link} from 'react-router-dom'
import TableComponent from './TableComponent'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTableDataReq} from '../appRedux/action'

class UploadComponent extends Component {

    state={
        tableData:[],
        col:[],
        row:[]
    }

  
    handleFiles = (e,bytes) => {
        e.preventDefault();
        var formData = new FormData();
        var data = e.target.files[0]
        formData.append("data", data)
        console.log(formData)
        axios.post("http://localhost:3005/upload",formData).then(res =>{
        var data = res.data.json    
        this.setState({tableData:data})
        // console.log(res.data.json)
        console.log(this.state.tableData)})
    }

    componentDidMount() {
        this.props.getTableDataReq();
        // fetch("http://localhost:3005/").then(data => data.json()).then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <form>
                    <input type="file" accept=".csv" onChange={this.handleFiles} />
                    <input type="submit" value="Submit" />
                </form>
                   {this.state.tableData !='' ? <TableComponent data={this.state.tableData} />:''}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {}
}

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({getTableDataReq},dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadComponent)
