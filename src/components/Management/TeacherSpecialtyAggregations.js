import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

class TeacherSpecialtyAggregations extends Component {

    constructor(){
        super();
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const {value} = event.target;
        this.setState({value});
    }

    render(){
        const { specialities, allSpecialities, addSpecialty, removeSpecialty } = this.props;
        const { value } = this.state;
        return(
            <Grid>
                <Row>
                    <Col xs={6}>
                        <FormControl className="formControl">
                            <InputLabel>Especialidad</InputLabel>
                            <Select value={value} onChange={this.handleChange} name="subject">
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    allSpecialities.map(item => (
                                        <MenuItem key={item.specialityKeycode} value={item.specialityKeycode} >
                                            {item.specialityName}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <Button variant="contained" color="primary" onClick={() => addSpecialty(allSpecialities.find(item => item.specialityKeycode===value))}>
                            Agregar Especialidad
                        </Button>
                    </Col>
                </Row>
                <Row className="teacherContent">
                    <ul>
                        {
                            specialities.map(specialty => (
                                <li key={specialty.specialityKeycode}>
                                    <Chip 
                                        label={specialty.specialityName}
                                        onDelete={() => removeSpecialty(specialty)}
                                        color="primary"  
                                        variant="outlined"
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </Row>
            </Grid>
        );
    }
}

export default TeacherSpecialtyAggregations;