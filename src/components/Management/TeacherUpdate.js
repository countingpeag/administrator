import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TeacherSpecialtyAggregations from './TeacherSpecialtyAggregations';
import TeacherSubjectAggregations from './TeacherSubjectAggregations';

class TeacherUpdate extends Component{

    constructor(){
        super();
        this.state = {
           rfcToSearch: '',
           updateName: '',
           updateLastnameFather: '',
           updateLastnameMother: '',
           updateRFC: '',
           updateInstitute: '',
           specialitiesToUpdate: [],
           subjectsToUpdate: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(event){
        const {value, id} = event.target;
        if(id==="teacherRFC")
            this.setState({rfcToSearch:value});
        else if(id==="updateName")
            this.setState({updateName:value});
        else if(id==="updateLastnameFather")
            this.setState({updateLastnameFather:value});
        else if(id==="updateLastnameMother")
            this.setState({updateLastnameMother:value});
        else if(id==="updateRFC")
            this.setState({updateRFC:value});
        else if(id==="updateInstitute")
            this.setState({updateInstitute:value});
    }

    handleAdd(obj){
        if(obj!==undefined){
            if(obj.subjectKeyCode!==undefined){
                let array = this.state.subjectsToUpdate.filter(element => element.subjectKeyCode!==obj.subjectKeyCode);
                array.push(obj);
                this.setState({subjectsToUpdate:array});
            }
            else{
                let array = this.state.specialitiesToUpdate.filter(element => element.specialityKeycode!==obj.specialityKeycode);
                array.push(obj);
                this.setState({specialitiesToUpdate:array});
            }
        }
    }

    handleRemove(obj){
        if(obj!==undefined){
            if(obj.subjectKeyCode!==undefined){
                let array = this.state.subjectsToUpdate.filter(element => element!==obj);
                this.setState({subjectsToUpdate:array});
            }
            else{
                let array = this.state.specialitiesToUpdate.filter(element => element!==obj);
                this.setState({specialitiesToUpdate:array});
            }
        }
    }

    handleSubmit(){
        const { updateName, updateLastnameFather, updateLastnameMother, updateRFC, updateInstitute, specialitiesToUpdate, subjectsToUpdate } = this.state;
        const { updateTecher, teacherInfo} = this.props;
        teacherInfo.teacherName = updateName;
        teacherInfo.teacherLastNameFather = updateLastnameFather;
        teacherInfo.teacherLastNameMother = updateLastnameMother;
        teacherInfo.teacherRFC = updateRFC;
        teacherInfo.idInstitute.instituteName = updateInstitute;
        teacherInfo.specialities = specialitiesToUpdate;
        teacherInfo.subjects = subjectsToUpdate

        updateTecher(teacherInfo);
    }

    handleSearch(){
        this.props.searchTeacher(this.state.rfcToSearch.trim());
    }

    componentWillReceiveProps(props){
        console.log(props.teacherInfo)
        this.setState({
            updateName: props.teacherInfo.teacherName,
            updateLastnameFather: props.teacherInfo.teacherLastNameFather,
            updateLastnameMother: props.teacherInfo.teacherLastNameMother,
            updateRFC: props.teacherInfo.teacherRFC,
            updateInstitute: props.teacherInfo.idInstitute.instituteName,
            specialitiesToUpdate: props.teacherInfo.specialities,
            subjectsToUpdate: props.teacherInfo.subjects
        });
    }

    render(){
        const { teacherInfo, schoolData } = this.props;
        const { specialitiesToUpdate, subjectsToUpdate, updateName, updateLastnameFather, updateLastnameMother, updateRFC, updateInstitute } = this.state;
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
                                    id="teacherRFC"
                                    label="RFC"
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
                                    value={`${updateName}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Apellido Paterno:
                                <Input
                                    id="updateLastnameFather"
                                    value={`${updateLastnameFather}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Apellido Materno:
                                <Input
                                    id="updateLastnameMother"
                                    value={`${updateLastnameMother}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>RFC:
                                <Input
                                    id="updateRFC"
                                    value={`${updateRFC}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Instituto: {`${updateInstitute}`} </h3>
                            <h3>Genero: {` ${teacherInfo.teacherGenre}`}</h3>
                        </div>
                        <Row center="xs">
                            <TeacherSpecialtyAggregations specialities={specialitiesToUpdate} allSpecialities={schoolData.specialities} addSpecialty={this.handleAdd} removeSpecialty={this.handleRemove} />
                            <TeacherSubjectAggregations subjects={subjectsToUpdate} allSubjects={schoolData.subjects} addSubject={this.handleAdd} removeSubject={this.handleRemove} />
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

const mapStateToProps = state => ({
    schoolData: state.StatisticsformData
});

export default connect(mapStateToProps,null)(TeacherUpdate);