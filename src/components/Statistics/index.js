import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactChartkick, { ColumnChart, PieChart } from 'react-chartkick';
import { connect } from 'react-redux';
import Chart from 'chart.js'; //This dependency is needed to render the charts
import { statisticsData } from '../../actions';
import FormOptionsContainer from '../../containers/FormOptionsContainer';
import NavBar from '../NavBar';
import '../../styles/StatisticsStyle.css';

class Statistics extends Component{

    constructor(){
        super();
        this.state ={
            speciality: '',
            subject: '',
            schedule: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data){
        this.props.search(data);
    }

    render(){
        const {approved, notApproved, men, women, firstP, secondP, thirdP} = this.props.statisticsData;
        let max = 0;
        if(notApproved>approved)
            max=notApproved;
        else
            max=approved;

        return(
            <div>
                <NavBar />
                <Grid className="square">
                    <Row className="charts">
                        <Col xs={12} md={2}>
                            <Row center="md">
                                <FormOptionsContainer sendOptions={this.handleClick}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row center="md">
                                <PieChart width="240px" height="240px" colors={["#097800", "#D10000"]} data={[["Aprobados", approved], ["Reprobados", notApproved]]}/>
                                <PieChart width="240px" height="240px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", men], ["Mujeres", women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <ColumnChart max={max} data={[["Aprobados", approved], ["Reprobados", notApproved], ["H Repro...", men], ["M Repro...", women]]} width={400}/> 
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Primer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", firstP.approved], ["Reprobados", firstP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", firstP.man], ["Mujeres", firstP.women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Segundo Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", secondP.approved], ["Reprobados", secondP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", secondP.man], ["Mujeres", secondP.women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Tercer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", thirdP.approved], ["Reprobados", thirdP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", thirdP.man], ["Mujeres", thirdP.women]]}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        search: value => dispatch(statisticsData(value))
    }
);

const mapStateToProps = state => (
    {
        statisticsData: state.statisticsData
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
ReactChartkick.addAdapter(Chart);