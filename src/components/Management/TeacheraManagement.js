import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { searchTeacherInfo, getData } from '../../actions';
import TeacherUpdate from './TeacherUpdate';
import '../../styles/TeacherStyle.css';

class TeacherManagement extends Component{

    componentWillReceiveProps(props){
        props.speciSubjectsData();
    }

    render(){
        const { searchTeacher, teacherInfo } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={5} className="teacherLine">
                        <TeacherUpdate searchTeacher={searchTeacher} teacherInfo={teacherInfo}/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h2>Agregar Profesor</h2>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    teacherInfo: state.teacherInfo
});

const mapDispatchToProps = dispatch => ({
    searchTeacher: value => dispatch(searchTeacherInfo(value)),
    speciSubjectsData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherManagement);