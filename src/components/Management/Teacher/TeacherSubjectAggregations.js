import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

class TeacherSubjectAggregations extends Component {

    constructor(){
        super();

        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {value} = event.target;
        this.setState({value});
    }

    render(){
        const { subjects, allSubjects, addSubject, removeSubject } = this.props;
        const { value } = this.state;
        return(
            <Grid>
                <Row>
                    <Col xs={6}>
                        <FormControl className="formControl">
                            <InputLabel>Materia</InputLabel>
                            <Select value={value} onChange={this.handleChange} name="subject">
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    allSubjects.map(item => (
                                        <MenuItem key={item.subjectKeyCode} value={item.subjectKeyCode} >
                                            {item.subjectName}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <Button variant="contained" color="primary" onClick={() => addSubject(allSubjects.find(item => item.subjectKeyCode===value))}>
                            Agregar Materia
                        </Button>
                    </Col>
                </Row>
                <Row className="teacherContent">
                    <ul>
                        {
                            subjects.map(subject => (
                                <li key={subject.subjectKeyCode}>
                                    <Chip 
                                        label={subject.subjectName}
                                        onDelete={() => removeSubject(subject)}
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

export default TeacherSubjectAggregations;