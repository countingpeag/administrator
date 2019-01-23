import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import ProgressComponent from '../Util/CircularProgress';
import '../../styles/ValidationStyle.css';

class Selects extends Component{

    constructor(){
        super();
        this.state ={
            speciality: '',
            subject: '',
            schedule: '',
        };
        this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeSchedule = this.handleChangeSchedule.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeSpeciality(event){
        this.setState({speciality: event.target.value});
    }

    handleChangeSubject(event){
        this.setState({subject: event.target.value});
    }

    handleChangeSchedule(event){
        this.setState({schedule: event.target.value});
    }

    handleClick(){
        if(this.props.sendOptions)
        {
            const { speciality, subject, schedule } = this.state; 
            const obj = {
                speciality: {specialityKeycode: speciality}, 
                subject: {subjectKeyCode: subject}, 
                shift: schedule
            }
            this.props.sendOptions(obj);
        }
    }

    render(){
        const { specialities, subjects } = this.props.data;
        const { statisticsRequest } = this.props;
        return(
            <Grid>
                <Row>
                    <Col className="separation">
                        <FormControl className="selectSpace">
                            <InputLabel htmlFor="speciality">Especialidad</InputLabel>
                            <Select
                                value={this.state.speciality}
                                onChange={this.handleChangeSpeciality}
                                inputProps={{
                                name: 'speciality',
                                id: 'speciality',
                                }}
                            >
                            {
                                specialities.map( item => <MenuItem key={item.specialityKeycode} value={item.specialityKeycode}>{item.specialityName}</MenuItem>)
                            }
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className="separation">
                        <FormControl className="selectSpace">
                            <InputLabel htmlFor="subject">Materia</InputLabel>
                            <Select
                                value={this.state.subject}
                                onChange={this.handleChangeSubject}
                                inputProps={{
                                name: 'subject',
                                id: 'subject',
                                }}
                            >
                            {
                                subjects.map( item => <MenuItem key={item.subjectKeyCode} value={item.subjectKeyCode}>{item.subjectName}</MenuItem>)
                            }
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className="separation">
                        <FormControl className="selectSpace">
                            <InputLabel htmlFor="schedule">Turno</InputLabel>
                            <Select
                                value={this.state.schedule}
                                onChange={this.handleChangeSchedule}
                                inputProps={{
                                name: 'schedule',
                                id: 'schedule',
                                }}
                            >
                                <MenuItem value={'matutino'}>Matutino</MenuItem>
                                <MenuItem value={'vespertino'}>Vespertino</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className="searchButton">
                        <Button variant="outlined" color="primary" onClick={this.handleClick} disabled={statisticsRequest}>Buscar</Button>
                        { statisticsRequest && <ProgressComponent size={24}/>}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => (
    {
        statisticsRequest: state.statisticsRequest
    }
);

export default connect(mapStateToProps, null)(Selects);