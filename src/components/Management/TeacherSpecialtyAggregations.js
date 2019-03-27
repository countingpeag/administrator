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
            specialitiesToSend: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    
    handleChange(event){
        const {value} = event.target;
        this.setState({value});
    }

    handleAdd(specialty){
        if(specialty!==undefined){
            let array = this.state.specialitiesToSend.filter(element => element!==specialty);
            array.push(specialty);
            this.setState({specialitiesToSend:array});
        }
    }

    handleRemove(specialty){
        let array = this.state.specialitiesToSend.filter(element => element!==specialty);
        this.setState({specialitiesToSend:array});
    }

    componentWillReceiveProps(props){
        this.setState({specialitiesToSend:props.specialities});
    }

    render(){
        const { specialities } = this.props;
        const { value, specialitiesToSend } = this.state;
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
                                    specialities.map(item => (
                                        <MenuItem key={item.specialityKeycode} value={item.specialityKeycode} >
                                            {item.specialityName}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <Button variant="contained" color="primary" onClick={() => this.handleAdd(specialities.find(item => item.specialityKeycode===value))}>
                            Agregar Especialidad
                        </Button>
                    </Col>
                </Row>
                <Row className="teacherContent">
                    <ul>
                        {
                            specialitiesToSend.map(specialty => (
                                <li key={specialty.specialityKeycode}>
                                    <Chip 
                                        label={specialty.specialityName}
                                        onDelete={() => this.handleRemove(specialty)}
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