import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid'; 
import DroppableDetailed from './../../Util/Droppable';

class DrappableContainer extends Component{
    render(){
        const { getItemStyle, getListStyle, morning, afternoon, droppableMorning, droppableAfternoon } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12} md={4}>
                                <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={morning} droppableId={droppableMorning} />
                            </Col>
                            <Col xs={12} md={4}>
                                <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={afternoon} droppableId={droppableAfternoon} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default DrappableContainer;