import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
                            </Tabs>
                        </AppBar>
                        {value === 0 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morningElectronica} afternoon={data.afternoonElectronica}  droppableMorning="morningElectronica" droppableAfternoon="afternoonElectronica"/>}
                        {value === 1 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morningClinico} afternoon={data.afternoonClinico}  droppableMorning="morningClinico" droppableAfternoon="afternoonClinico"/>}
                        {value === 2 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morningQuimico} afternoon={data.afternoonQuimico}  droppableMorning="morningQuimico" droppableAfternoon="afternoonQuimico"/>}
                        {value === 3 && <DrappableContainer getItemStyle={getItemStyle} getListStyle={getListStyle} morning={data.morningAutomotriz} afternoon={data.afternoonAutomotriz}  droppableMorning="morningAutomotriz" droppableAfternoon="afternoonAutomotriz"/>}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default withStyles(styles)(CandidatesTab);