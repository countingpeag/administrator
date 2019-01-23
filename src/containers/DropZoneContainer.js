import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFilesData } from '../actions';
import DropZone from '../components/File/DropZone';

class DropZoneContainer extends Component{
    render(){
        return(
            <DropZone save={this.props.saveFile}/>
        );
    }
}

const mapDispatchToprops = dispatch => (
    {
        saveFile: value => dispatch(saveFilesData(value))
    }
);

export default connect(null, mapDispatchToprops)(DropZoneContainer);