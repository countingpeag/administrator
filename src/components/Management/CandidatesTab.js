import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DroppableDetailed from '../Util/Droppable';
import DrappableContainer from './DrappableContainer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/ManagementStyle.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });
  

class CandidatesTab extends Component {
    
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { classes, getItemStyle, getListStyle, data} = this.props;
        return (
        <div>
            <Grid id="CandidatesTab">
                <Row>
                    <Col xs={12} className={classes.root}> 
                        <Row center="xs">
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                scrollable
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="ELECTRÓNICA" />
                                <Tab label="LABORATORIO CLÍNICO" />
                                <Tab label="LABORATORISTA QUÍMICO" />
                                <Tab label="MANTENIMIENTO AUTOMOTRIZ" />
                                <Tab label="LABORATORISTA CLÍNICO" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morning1} afternoon={data.afternoon1}  droppableMorning="droppable1" droppableAfternoon="droppable6"/>}
                        {value === 1 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morning2} afternoon={data.afternoon2}  droppableMorning="droppable2" droppableAfternoon="droppable7"/>}
                        {value === 2 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morning3} afternoon={data.afternoon3}  droppableMorning="droppable3" droppableAfternoon="droppable8"/>}
                        {value === 3 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morning4} afternoon={data.afternoon4}  droppableMorning="droppable4" droppableAfternoon="droppable9"/>}
                        {value === 4 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morning5} afternoon={data.afternoon5}  droppableMorning="droppable5" droppableAfternoon="droppable10"/>}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default withStyles(styles)(CandidatesTab);