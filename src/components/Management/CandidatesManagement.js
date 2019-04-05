import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DroppableDetailed from '../Util/Droppable';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `student-${k + offset}`,
        content: `Estudiante ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

class CandidatesManagement extends Component {
    state = {
        items: getItems(10),
        selected1: getItems(5, 10),
        selected2: getItems(5, 15),
        selected3: getItems(5, 20),
        selected4: getItems(5, 25),
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected1',
        droppable3: 'selected2',
        droppable4: 'selected3',
        droppable5: 'selected4',
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;
        console.log(source, "<-->", destination);
        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected1: items };
            }
            if (source.droppableId === 'droppable3') {
                state = { selected2: items };
            }
            if (source.droppableId === 'droppable4') {
                state = { selected3: items };
            }
            if (source.droppableId === 'droppable5') {
                state = { selected4: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            if((source.droppableId==="droppable" && destination.droppableId==="droppable2") || (source.droppableId==="droppable2" && destination.droppableId==="droppable")){
                this.setState({
                    items: result.droppable,
                    selected1: result.droppable2
                });
            }
            else if((source.droppableId==="droppable" && destination.droppableId==="droppable3") || (source.droppableId==="droppable3" && destination.droppableId==="droppable")){
                this.setState({
                    items: result.droppable,
                    selected2: result.droppable3
                });
            }
            else if( (source.droppableId==="droppable" && destination.droppableId==="droppable4") || (source.droppableId==="droppable4" && destination.droppableId==="droppable")) {
                this.setState({
                    items: result.droppable,
                    selected3: result.droppable4
                });
            }
            else if((source.droppableId==="droppable" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="droppable")){
                this.setState({
                    items: result.droppable,
                    selected4: result.droppable5
                });
            }
            else if((source.droppableId==="droppable2" && destination.droppableId==="droppable3") || (source.droppableId==="droppable3" && destination.droppableId==="droppable2")){
                this.setState({
                    selected1: result.droppable2,
                    selected2: result.droppable3
                });
            }
            else if((source.droppableId==="droppable2" && destination.droppableId==="droppable4") || (source.droppableId==="droppable4" && destination.droppableId==="droppable2")){
                this.setState({
                    selected1: result.droppable2,
                    selected3: result.droppable4
                });
            }
            else if((source.droppableId==="droppable2" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="droppable2")){
                this.setState({
                    selected1: result.droppable2,
                    selected4: result.droppable5
                });
            }
            else if((source.droppableId==="droppable3" && destination.droppableId==="droppable4") || (source.droppableId==="droppable4" && destination.droppableId==="droppable3")){
                this.setState({
                    selected2: result.droppable3,
                    selected3: result.droppable4
                });
            }
            else if((source.droppableId==="droppable3" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="droppable3")){
                this.setState({
                    selected2: result.droppable3,
                    selected4: result.droppable5
                });
            }
            else if((source.droppableId==="droppable4" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="droppable4")){
                this.setState({
                    selected3: result.droppable4,
                    selected4: result.droppable5
                });
            }
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Grid>
                    <Row>
                        <Col xs={3}>
                            <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.items} droppableId="droppable" />
                        </Col>
                        <Col xs={9}>
                            <Row center="xs">
                                <Col xs={4}>
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.selected1} droppableId="droppable2" />
                                </Col>
                                <Col xs={4}>
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.selected2} droppableId="droppable3" />
                                </Col>
                                <Col xs={4}>
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.selected3} droppableId="droppable4" />
                                </Col>
                            </Row>
                            <Row center="xs">
                                <Col xs={4}>
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.selected4} droppableId="droppable5" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </DragDropContext>
        );
    }
}


export default CandidatesManagement;