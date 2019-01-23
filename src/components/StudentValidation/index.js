import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import StudentTableContainer from '../../containers/StudentTableContainer';
import FormOptions from './FormOptions';
import NavBar from '../NavBar';
import { getStudentData, getFormData, sendStudentsValidation} from '../../actions';
import '../../styles/ValidationStyle.css';


class StudentValidation extends Component {

    constructor(){
        super();
        this.state = {
            studentsSelected: []
        };
        this.handleSearchButton = this.handleSearchButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.studentsSelected = this.studentsSelected.bind(this);
        this.studentSelected = this.studentSelected.bind(this);
    }

    handleSearchButton(value){
        this.props.search(value);
    }

    handleSubmit(){
        const { studentsSelected } = this.state;
        const students = studentsSelected.map( student => {
            const obj = {
                studentName: student.name,
                studentLastName: student.lastname,
                studentTuition: student.tuition,
                studentVisibility: student.visibility,
                studentLevel: student.year
            };
            return obj;
        })
        this.props.sendData(students);
    }

    studentsSelected(students){
        this.setState({studentsSelected: students})    
    }

    studentSelected(student){
        const { studentsSelected } = this.state;
        const newArr = studentsSelected;
        const position = newArr.indexOf(student);

        if(position===-1)
            newArr.push(student);
        else
            newArr[position]=student;
            
        this.setState({studentsSelected: newArr});
    }

    componentDidMount(){
        this.props.getValidationOptions();
    }

    render(){
        return(
            <div>
                <NavBar />
                <Grid className="shadow">
                    <Row className="containerr">
                        <Col sx={12} sm={12} md={2} className="options">
                            <FormOptions sendOptions={this.handleSearchButton} data={this.props.formData} loading={this.props.searchStudentsValidation}/>
                        </Col>
                        <Col xs={12} sm={12} md={10}>
                            <StudentTableContainer 
                                data={this.props.studentsData} 
                                studentSelected={this.studentSelected} 
                                studentsSelected={this.studentsSelected}
                                submit={this.handleSubmit}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        search: value => dispatch(getStudentData(value)),
        getValidationOptions: () => dispatch(getFormData()),
        sendData: value => dispatch(sendStudentsValidation(value))
    }
);

const mapStateToProps = state => (
    {
        formData: state.validationOptionsData,
        studentsData: state.validationStudentsData,
        searchStudentsValidation: state.searchStudentsValidation
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(StudentValidation);