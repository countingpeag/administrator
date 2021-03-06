import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Grid, Row, Col } from 'react-flexbox-grid';
import { characterSize } from './../../Util/Validations';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TeacherSpecialtyAggregations from './TeacherSpecialtyAggregations';
import TeacherSubjectAggregations from './TeacherSubjectAggregations';
import ProgressComponent from './../../Util/CircularProgress';

class TeacherAppend extends Component{

    constructor(){
        super();
        this.state = {
            teacherName: '',
            teacherLastnameFather: '',
            teacherLastnameMother: '',
            teacherUsername: '',
            teacherRFC: '',
            teacherInstitute: '',
            teacherGenre: '',
            specialities: [],
            subjects: [],
            teacherCompleted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { id, value, name } = event.target;
        if(id==="teacherName")
            this.setState({teacherName:value});
        else if(id==="teacherLastnameFather")
            this.setState({teacherLastnameFather:value});
        else if(id==="teacherLastnameMother")
            this.setState({teacherLastnameMother:value});
        else if(id==="teacherUsername")
            this.setState({teacherUsername:value});
        else if(id==="teacherRFC")
            this.setState({teacherRFC:value});
        else if(id==="teacherInstitute")
            this.setState({teacherInstitute:value});
        else if(name==="teacherGenre")
            this.setState({teacherGenre:value});
    }

    handleAdd(obj){
        if(obj!==undefined){
            if(obj.subjectKeyCode!==undefined){
                let array = this.state.subjects.filter(element => element.subjectKeyCode!==obj.subjectKeyCode);
                array.push(obj);
                this.setState({subjects:array});
            }
            else{
                let array = this.state.specialities.filter(element => element.specialityKeycode!==obj.specialityKeycode);
                array.push(obj);
                this.setState({specialities:array});
            }
        }
    }

    handleRemove(obj){
        if(obj!==undefined){
            if(obj.subjectKeyCode!==undefined){
                let array = this.state.subjects.filter(element => element!==obj);
                this.setState({subjects:array});
            }
            else{
                let array = this.state.specialities.filter(element => element!==obj);
                this.setState({specialities:array});
            }
        }
    }

    handleSubmit(){
        const { specialities, subjects, teacherName, teacherLastnameFather, teacherLastnameMother, teacherUsername, teacherRFC, teacherGenre } = this.state;
        let teacher = {
            teacherName,
            teacherLastNameFather:teacherLastnameFather,
            teacherLastNameMother:teacherLastnameMother,
            teacherUsername,
            teacherPassword:teacherRFC,
            teacherGenre,
            teacherRFC,
            idInstitute:{
                idInstitute: 1,
                instituteName: "CBTIS NO. 38",
                instituteAddress: null,
                institutePhone: null
            },
            subjects,
            specialities
        };

        if(characterSize(teacherName, 3, 45) && characterSize(teacherLastnameFather, 3, 45) 
            && characterSize(teacherLastnameMother, 3, 45) && characterSize(teacherRFC, 10, 21) 
            && characterSize(teacherUsername, 3, 45) && teacherGenre!=='' && specialities!=='' && subjects!=='')
                this.props.saveTeacher(teacher);
    }

    componentDidMount(){
        this.props.speciSubjectsData();
    }

    componentDidUpdate(){
        const { teacherName, teacherLastnameFather, teacherLastnameMother, teacherUsername, teacherRFC, teacherGenre, teacherCompleted } = this.state;

        if(teacherName!=='' && teacherLastnameFather!=='' && teacherLastnameMother!=='' && teacherUsername!=='' && teacherRFC!=='' && teacherGenre!=='' && teacherCompleted===false)
            this.setState({teacherCompleted:true});
    }

    render(){
        const { specialities, subjects, teacherName, teacherLastnameFather, teacherLastnameMother, teacherUsername, teacherRFC, teacherGenre, teacherCompleted} = this.state;
        const { schoolData, saveTeacherRequest } = this.props;
        
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <h2>Agregar Profesor</h2>
                        </Row>
                        <Row>
                            <Col xs={12} className="teacherContent">
                                    <h3>Nombre: 
                                        <Input
                                            id="teacherName"
                                            value={`${teacherName}`}
                                            inputProps={{'aria-label': 'Description'}}
                                            onChange={this.handleChange}
                                        />
                                    </h3>
                                    <h3>Apellido Paterno:
                                        <Input
                                            id="teacherLastnameFather"
                                            value={`${teacherLastnameFather}`}
                                            inputProps={{'aria-label': 'Description'}}
                                            onChange={this.handleChange}
                                        />
                                    </h3>
                                    <h3>Apellido Materno:
                                        <Input
                                            id="teacherLastnameMother"
                                            value={`${teacherLastnameMother}`}
                                            inputProps={{'aria-label': 'Description'}}
                                            onChange={this.handleChange}
                                        />
                                    </h3>
                                    <h3>Nombre de Usuario:
                                        <Input
                                            id="teacherUsername"
                                            value={`${teacherUsername}`}
                                            inputProps={{'aria-label': 'Description'}}
                                            onChange={this.handleChange}
                                        />
                                    </h3>
                                    <h3>RFC:
                                        <Input
                                            id="teacherRFC"
                                            value={`${teacherRFC}`}
                                            inputProps={{'aria-label': 'Description'}}
                                            onChange={this.handleChange}
                                        />
                                    </h3>
                                    <h3>Genero:
                                        <FormControl className="teacherGenre">
                                            <InputLabel>Sexo</InputLabel>
                                            <Select value={teacherGenre} onChange={this.handleChange} id="teacherGenre" name="teacherGenre">
                                                <MenuItem value=''>
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value='H'>
                                                    Hombre
                                                </MenuItem>
                                                <MenuItem value='M'>
                                                    Mujer
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </h3>
                            </Col>
                        </Row>
                        <Row center="xs" >
                            <Col xs={12} md={6}>
                                <TeacherSpecialtyAggregations specialities={specialities} allSpecialities={schoolData.specialities} addSpecialty={this.handleAdd} removeSpecialty={this.handleRemove} />
                            </Col>
                            <Col xs={12} md={6}>
                                <TeacherSubjectAggregations subjects={subjects} allSubjects={schoolData.subjects} addSubject={this.handleAdd} removeSubject={this.handleRemove} />
                            </Col>
                        </Row>
                        <Row center="xs" className="progressButton">
                            <Button variant="contained" color="secondary" onClick={this.handleSubmit} disabled={!teacherCompleted || saveTeacherRequest}>
                                    Crear
                            </Button>
                            { saveTeacherRequest && <ProgressComponent size={24} />}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    schoolData: state.StatisticsformData,
    saveTeacherRequest: state.saveTeacherRequest
});

export default connect(mapStateToProps, null)(TeacherAppend);