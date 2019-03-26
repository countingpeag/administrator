import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class CandidatesManagement extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col>
                        <TextField
                            id="nameFind"
                            label="Nombre"
                            placeholder="Materia"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2>Candidates Managements</h2>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default CandidatesManagement;