import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { searchTeacherInfo, saveOrupdateTecher, getData } from '../../../actions';
import TeacherUpdate from './TeacherUpdate';
import TeacherAppend from './TeacherAppend';
import '../../../styles/TeacherStyle.css';

class TeacherManagement extends Component{

    componentWillReceiveProps(props){
        props.speciSubjectsData();
    }

    render(){
        const { searchTeacher, teacherInfo, saveOrupdateTecher, speciSubjectsData } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={5} className="teacherLine">
                        <TeacherUpdate searchTeacher={searchTeacher} teacherInfo={teacherInfo} updateTecher={saveOrupdateTecher} />
                    </Col>
                    <Col xs={12} md={7} className="teacherLine">
                        <TeacherAppend speciSubjectsData={speciSubjectsData} saveTeacher={saveOrupdateTecher}/>
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
    speciSubjectsData: () => dispatch(getData()),
    saveOrupdateTecher: value => dispatch(saveOrupdateTecher(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherManagement);