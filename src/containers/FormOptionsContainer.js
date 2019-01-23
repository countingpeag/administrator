import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Selects from '../components/Statistics/FormOptions';

class FormOptionsContainer extends Component{

    componentDidMount(){
        this.props.setData();
    }

    render(){
        return(
            <Selects data={this.props.formData} sendOptions={this.props.sendOptions}/>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        setData: () => dispatch(getData())
    }
);

const mapStateToProps = state => (
    {
        formData: state.StatisticsformData
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(FormOptionsContainer);