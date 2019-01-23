import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ProgressComponent from '../Util/CircularProgress';
import '../../styles/FileStyle.css';

//Drag and Drop component to upload files
class DropZone extends Component {
    constructor() {
        super();
        this.state = { 
          files: [] 
        }
      this.onDrop = this.onDrop.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(){
        const files = this.state.files;

        if(files.length>0){
            const file = new FormData();
            file.append('file', files[0], files[0].name);

            this.props.save(file);
        }
        else{
            alert("Debe seleccionar un archivo.");
        }
    }

    onDrop(files) {
        console.log(files)
      this.setState({
        files
      });
    }
  
    render() {
        const { files } = this.state;
        const { loading } = this.props;

        return (
            <section>
            <div className="dropzoneSpace">
                <Dropzone onDrop={this.onDrop} className="dropzone">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Row center="xs" className="upload">
                                    <Col xs={12}>
                                        <CloudUploadIcon color="primary" style={{fontSize: 150}} />
                                    </Col>
                                    <Col xs={12}>
                                        {
                                            //if there is some file selected its name will be show otherwise will appear a button to select a file
                                            files.length > 0 ? files.map(f => <li className="file" key={f.name}>{f.name} - {f.size} bytes</li>) 
                                            : <Button variant="outlined" color="primary">
                                                Elegir Archivo
                                                </Button>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Dropzone>
            </div>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col className="buttonSubmit">
                                <Button variant="contained" color="primary" onClick={this.handleClick} disabled={loading}>Guardar</Button>
                                {loading && <ProgressComponent size={24}/>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            </section>
        );
    }
}
  
const mapStateToProps = state => (
    {
        loading: state.fileRequest
    }
);

export default connect(mapStateToProps, null)(DropZone);