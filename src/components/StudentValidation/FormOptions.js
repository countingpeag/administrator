import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import {Grid, Row, Col} from 'react-bootstrap';
import ProgressCompoent from '../Util/CircularProgress';
import '../../styles/ValidationStyle.css';

class FormOptions extends Component{

    constructor(){
        super();
        this.state ={
            speciality: '',
            group: '',
            shift: '',
        };
        this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleChangeShift = this.handleChangeShift.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeSpeciality(event){
        this.setState({speciality: event.target.value});
    }

    handleChangeGroup(event){
        this.setState({group: event.target.value});
    }

    handleChangeShift(event){
        this.setState({shift: event.target.value});
    }

    handleClick(){
        if(this.props.sendOptions)
        {
            const { speciality, group, shift } = this.state; 
            const obj = {
                speciality: {specialityKeycode: speciality}, 
                group: {idGroup: group}, 
                shift: shift
            }
            this.props.sendOptions(obj);
        }
    }

    render(){
        const { specialities, groups } = this.props.data;
        const { loading } = this.props;
        
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
                            <InputLabel htmlFor="group">Grupo</InputLabel>
                            <Select
                                value={this.state.group}
                                onChange={this.handleChangeGroup}
                                inputProps={{
                                name: 'group',
                                id: 'group',
                                }}
                            >
                            {
                                groups.map( item => <MenuItem key={item.idGroup} value={item.idGroup}>{item.groupName}</MenuItem>)
                            }
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className="separation">
                        <FormControl className="selectSpace">
                            <InputLabel htmlFor="shift">Turno</InputLabel>
                            <Select
                                value={this.state.shift}
                                onChange={this.handleChangeShift}
                                inputProps={{
                                name: 'shift',
                                id: 'shift',
                                }}
                            >
                                <MenuItem value={'matutino'}>Matutino</MenuItem>
                                <MenuItem value={'vespertino'}>Vespertino</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className="searchButtonValidation">
                        <Button variant="outlined" color="primary" onClick={this.handleClick} disabled={loading}>Buscar</Button>
                        {loading && <ProgressCompoent size={24}/>}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FormOptions;