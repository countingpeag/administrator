import React, {Component} from 'react';
import { connect } from 'react-redux';
import StudentTable from '../components/StudentValidation/Table';

class StudentTableContainer extends Component{

    render(){
        return(
            <StudentTable 
                data={this.props.data} 
                studentSelected={this.props.studentSelected} 
                studentsSelected={this.props.studentsSelected}
                submit={this.props.submit}
            />
        );
    }
}

const mapStateToProps = state => (
    {}
);

const mapDispatchToProps = dispatch => (
    {}
);

export default connect(mapStateToProps, mapDispatchToProps)(StudentTableContainer);