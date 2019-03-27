import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TeacherSpecialtyAggregations from './TeacherSpecialtyAggregations';
import TeacherSubjectAggregations from './TeacherSubjectAggregations';

class TeacherUpdate extends Component{

    constructor(){
        super();
        this.state = {
           nameToSearch: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event){
        const {value} = event.target;
        this.setState({nameToSearch:value});
    }

    handleSubmit(){
        console.log(this.state.nameToSearch.trim());
    }

    handleSearch(){
        this.props.searchTeacher(this.state.nameToSearch);
    }

    render(){
        const { teacherInfo } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <h2>Actualizar Profesor</h2>
                        </Row>
                        <Row center="xs">
                            <Col>
                                <TextField
                                    id="teacher"
                                    label="Nombre"
                                    placeholder="Profesor"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col className="buttonSpace">
                                <Button variant="contained" color="primary" onClick={this.handleSearch}>
                                    Buscar
                                </Button>
                            </Col>
                        </Row>
                        <div className="teacherContent">
                            <h3>id: {teacherInfo.idTeacher}</h3>
                            <h3>Nombre:
                                <Input
                                    id="updateName"
                                    value={` ${teacherInfo.teacherName}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Apellidos
                                <Input
                                    id="updateName"
                                    value={` ${teacherInfo.teacherLastName}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>RFC:
                                <Input
                                    id="updateName"
                                    value={` ${teacherInfo.teacherRFC}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Instituto:
                                <Input
                                    id="updateName"
                                    value={` ${teacherInfo.idInstitute.instituteName}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Genero: {` ${teacherInfo.teacherGenre}`}</h3>
                        </div>
                        <Row center="xs">
                            <TeacherSpecialtyAggregations specialities={teacherInfo.specialities}/>
                            <TeacherSubjectAggregations subjects={teacherInfo.subjects}/>
                        </Row>
                        <Row center="xs">
                            <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                                    Guardar
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TeacherUpdate;