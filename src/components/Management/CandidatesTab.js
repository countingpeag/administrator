import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DroppableDetailed from '../Util/Droppable';
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
                        {value === 0 && <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={data.selected1} droppableId="droppable2" />}
                        {value === 1 && <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={data.selected2} droppableId="droppable3" />}
                        {value === 2 && <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={data.selected3} droppableId="droppable4" />}
                        {value === 3 && <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={data.selected4} droppableId="droppable5" />}
                        {value === 4 && <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={data.selected5} droppableId="droppable6" />}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default withStyles(styles)(CandidatesTab);