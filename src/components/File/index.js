import React, {Component} from 'react';
import DropZoneContainer from '../../containers/DropZoneContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../NavBar';

import '../../styles/FileStyle.css';

class File extends Component {

    render() {
      return (
        <div>
            <NavBar />
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <DropZoneContainer />
                    </Col>
                </Row>
            </Grid>
        </div>
      );
    }
  }
  
export default File;