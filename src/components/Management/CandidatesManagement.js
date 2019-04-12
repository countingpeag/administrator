import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DroppableDetailed from '../Util/Droppable';
import CandidatesTab from './CandidatesTab';
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



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
        selected5: getItems(5, 30),
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
        droppable6: 'selected5',
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
            if (source.droppableId === 'droppable6') {
                state = { selected5: items };
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
            else if((source.droppableId==="droppable" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable")){
                this.setState({
                    items: result.droppable,
                    selected5: result.droppable6
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
            else if((source.droppableId==="droppable2" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable2")){
                this.setState({
                    selected1: result.droppable2,
                    selected5: result.droppable6
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
            else if((source.droppableId==="droppable3" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable3")){
                this.setState({
                    selected2: result.droppable3,
                    selected5: result.droppable6
                });
            }
            else if((source.droppableId==="droppable4" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="droppable4")){
                this.setState({
                    selected3: result.droppable4,
                    selected4: result.droppable5
                });
            }
            else if((source.droppableId==="droppable4" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable4")){
                this.setState({
                    selected3: result.droppable4,
                    selected5: result.droppable6
                });
            }
            else if((source.droppableId==="droppable5" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable5")){
                this.setState({
                    selected4: result.droppable5,
                    selected5: result.droppable6
                });
            }
        }
    };

    demoFromHTML() {

        const columns = [
        {title: "ID", dataKey: "id"},
        {title: "Name", dataKey: "name"},
        {title: "Country", dataKey: "country"},
        ];
        const rows = [
        {"id": 1, "name": "Shaw", "country": "Tanzania"},
        {"id": 2, "name": "Nelson", "country": "Kazakhstan"},
        {"id": 3, "name": "Garcia", "country": "Madagascar"},
        ];
        
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, rows, {
            styles: {fillColor: [100, 255, 255]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 60},
            addPageContent: function(data) {
                doc.text("Esto es una prueba de lo que puede contener un reporte", 40, 30);
            }
        });
        doc.save('test.pdf');
        }
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Grid>
                    <Row>
                        <Col xs={3}>
                            <Row center="xs">
                                <h2>No seleccionados</h2>
                            </Row>
                            <Row center="xs">
                                <Col xs={12} id="limitTen">
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.items} droppableId="droppable" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <CandidatesTab getItemStyle={getItemStyle} getListStyle={getListStyle} data={this.state}/>
                        </Col>
                    </Row>
                </Grid>
            </DragDropContext>
        );
    }
}


export default CandidatesManagement;