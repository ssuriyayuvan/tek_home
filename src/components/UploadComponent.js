import React, { Component } from 'react'
// import FileUploadProgress  from 'react-fileupload-progress';
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTableDataReq, tableDataRecv } from '../appRedux/action'
import { Button } from 'antd/lib/radio';

class UploadComponent extends Component {

    state = {
        tableData: [],
        col: [],
        row: [],
        popUp: ''
    }


    handleFiles = (e, bytes) => {
        e.preventDefault();
        var formData = new FormData();
        var data = e.target.files[0]
        formData.append("data", data)
        console.log(formData)
        this.props.getTableDataReq(formData)
        this.setState({
            popUp: true
        })
    }

    componentWillReceiveProps(p) {
        console.log(p)
        if (this.props.data !== '') {
            this.setState({
                popUp: true
            })
        }
    }

    setFalse = () => {
        this.props.history.push('/table')
    }

    render() {
        console.log(this.state.popUp)

        return (
            <div>
                {this.state.popUp && <Modal
                    footer={null}
                    visible={this.state.popUp}
                    onCancel={this.setFalse}
                >
                    <p>Uploaded Successfully</p>
                    <Button onClick={this.setFalse}>Open File</Button>
                    {/* <button className="btn btn-success">Open File</button> */}
                </Modal>}
                <div className="fileUpload">
                    <label className="btna fileUpload btna-default">
                        Browse Files Here<input type="file" accept=".csv" onChange={this.handleFiles} hidden="" />
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.table }
}

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({ getTableDataReq, tableDataRecv }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent)
