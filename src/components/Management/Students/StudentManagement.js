import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressComponent from '../../Util/CircularProgress';
import { getTuition, deleteStud } from '../../../actions'; 
import '../../../styles/StudentsStyle.css';

class StudentManagement extends Component{

    constructor(props){
        super(props);
        this.state = {
            tuition : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        this.setState({tuition: event.target.value});
    }

    handleClick(){
        let tuition = this.state.tuition;
        const studentObj = {
            "tuition": tuition
        };

        if(tuition!=="")
            this.props.getStudent(studentObj);
    }

    handleDelete(student){
        if(student.studentTuition!==undefined)
            this.props.deleteStudent(student);
    }

    render(){
        const student = this.props.student;
        return(
            <Grid>
                <Row>
                    <Col xs={12} >
                        <Row center="xs" className="searchStudent">
                            <h2>Eliminar Alumno</h2>
                        </Row>
                        <Row center="xs" middle="xs">
                            <Col xs={12} md={3}>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Numero de Control"
                                    placeholder="Alumno"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={12} md={1} className="progress">
                                <Button variant="contained" color="primary" onClick={this.handleClick} disabled={this.props.searchStudent}>
                                    Buscar
                                </Button>
                                {
                                    this.props.searchStudent && <ProgressComponent size={24}/>
                                }
                            </Col>
                        </Row>
                        <Row center="xs" className="info">
                            <Col xs={6}>
                                <h2>Nombre: {student.studentName!==undefined ? student.studentName : "none"}</h2>
                                <h2>Apellido: {student.studentLastName!==undefined ? student.studentLastName : "none"}</h2>
                                <h2>Matricula: {student.studentTuition!==undefined ? student.studentTuition : "none"}</h2>
                                <h2>Sexo: {student.studentGenre!==undefined ? student.studentGenre : "none"}</h2>
                                <h2>Turno: {student.studentShift!==undefined ? student.studentShift : "none"}</h2>
                                <h2>Especialidad: {student.idSpeciality.specialityName!==undefined ? student.idSpeciality.specialityName : "none"}</h2>
                            </Col>
                        </Row>
                        <Row center="xs" className="deleteButton">
                            <Col xs={6} className="progress">
                                <Button variant="contained" color="secondary" onClick={() => this.handleDelete(student)} disabled={student.studentName===undefined || this.props.delete ? true : false}>
                                    Elimnar
                                </Button>
                                {
                                    this.props.delete && <ProgressComponent size={24}/>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getStudent: value => dispatch(getTuition(value)),
    deleteStudent : value => dispatch(deleteStud(value))
});

const mapStateToProps = state => ({
    searchStudent: state.searchStudent,
    delete: state.deleteStudent,
    student: state.studentInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagement);