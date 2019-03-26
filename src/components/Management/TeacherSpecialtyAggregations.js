import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class TeacherSpecialtyAggregations extends Component {
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={6}>
                        <FormControl className="formControl">
                            <InputLabel>Especialidad</InputLabel>
                            <Select value={''} onChange={this.handleChange} name="subject">
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Agregar Especialidad
                        </Button>
                    </Col>
                </Row>
                <Row className="teacherContent">
                    <h3>Specialities</h3>
                </Row>
            </Grid>
        );
    }
}

export default TeacherSpecialtyAggregations;