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
            value:'',
            subjectsToSend: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(event){
        const {value} = event.target;
        this.setState({value});
    }

    handleAdd(subject){
        if(subject!==undefined){
            let array = this.state.subjectsToSend.filter(element => element!==subject);
            array.push(subject);
            this.setState({subjectsToSend:array});
        }
    }

    handleRemove(subject){
        let array = this.state.subjectsToSend.filter(element => element!==subject);
        this.setState({subjectsToSend:array});
    }

    componentWillReceiveProps(props){
        this.setState({subjectsToSend:props.subjects});
    }

    render(){
        const { subjects } = this.props;
        const { value, subjectsToSend } = this.state;
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
                                    subjects.map(item => (
                                        <MenuItem key={item.subjectKeyCode} value={item.subjectKeyCode} >
                                            {item.subjectName}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <Button variant="contained" color="primary" onClick={() => this.handleAdd(subjects.find(item => item.subjectKeyCode===value))}>
                            Agregar Materia
                        </Button>
                    </Col>
                </Row>
                <Row className="teacherContent">
                    <ul>
                        {
                            subjectsToSend.map(subject => (
                                <li key={subject.subjectKeyCode}>
                                    <Chip 
                                        label={subject.subjectName}
                                        onDelete={() => this.handleRemove(subject)}
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