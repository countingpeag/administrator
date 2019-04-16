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

//Moves an item from one list to another list.
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
    constructor(){
        super();
        this.state = {
            items: getItems(10),
            morning1: getItems(5, 10),
            morning2: getItems(5, 15),
            morning3: getItems(5, 20),
            morning4: getItems(5, 25),
            morning5: getItems(5, 30),
            afternoon1: getItems(5, 35),
            afternoon2: getItems(5, 40),
            afternoon3: getItems(5, 45),
            afternoon4: getItems(5, 50),
            afternoon5: getItems(5, 55)
        };
    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        items: 'items',
        droppable1: 'morning1',
        droppable2: 'morning2',
        droppable3: 'morning3',
        droppable4: 'morning4',
        droppable5: 'morning5',
        droppable6: 'afternoon1',
        droppable7: 'afternoon2',
        droppable8: 'afternoon3',
        droppable9: 'afternoon4',
        droppable10: 'afternoon5',
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

            if (source.droppableId === 'droppable1') {
                state = { droppable1: items };
            }
            if (source.droppableId === 'droppable2') {
                state = { droppable2: items };
            }
            if (source.droppableId === 'droppable3') {
                state = { droppable3: items };
            }
            if (source.droppableId === 'droppable4') {
                state = { droppable4: items };
            }
            if (source.droppableId === 'droppable5') {
                state = { droppable5: items };
            }
            if (source.droppableId === 'droppable6') {
                state = { droppable6: items };
            }
            if (source.droppableId === 'droppable7') {
                state = { droppable7: items };
            }
            if (source.droppableId === 'droppable8') {
                state = { droppable8: items };
            }
            if (source.droppableId === 'droppable9') {
                state = { droppable9: items };
            }
            if (source.droppableId === 'droppable10') {
                state = { droppable10: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            if((source.droppableId==="items" && destination.droppableId==="droppable1") || (source.droppableId==="droppable1" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    morning1: result.droppable1
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable2") || (source.droppableId==="droppable2" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    morning2: result.droppable2
                });
            }
            else if( (source.droppableId==="items" && destination.droppableId==="droppable3") || (source.droppableId==="droppable3" && destination.droppableId==="items")) {
                this.setState({
                    items: result.items,
                    morning3: result.droppable3
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable4") || (source.droppableId==="droppable4" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    morning4: result.droppable4
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable5") || (source.droppableId==="droppable5" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    morning5: result.droppable5
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    afternoon1: result.droppable6
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable7") || (source.droppableId==="droppable7" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    afternoon2: result.droppable7
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable8") || (source.droppableId==="droppable8" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    afternoon3: result.droppable8
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable9") || (source.droppableId==="droppable9" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    afternoon4: result.droppable9
                });
            }
            else if((source.droppableId==="items" && destination.droppableId==="droppable10") || (source.droppableId==="droppable10" && destination.droppableId==="items")){
                this.setState({
                    items: result.items,
                    afternoon5: result.droppable10
                });
            }
            else if((source.droppableId==="droppable1" && destination.droppableId==="droppable6") || (source.droppableId==="droppable6" && destination.droppableId==="droppable1")){
                this.setState({
                    morning1: result.droppable1,
                    afternoon1: result.droppable6
                });
            }
            else if((source.droppableId==="droppable2" && destination.droppableId==="droppable7") || (source.droppableId==="droppable7" && destination.droppableId==="droppable2")){
                this.setState({
                    morning2: result.droppable2,
                    afternoon2: result.droppable7
                });
            }
            else if((source.droppableId==="droppable3" && destination.droppableId==="droppable8") || (source.droppableId==="droppable8" && destination.droppableId==="droppable3")){
                this.setState({
                    morning3: result.droppable3,
                    afternoon3: result.droppable8
                });
            }
            else if((source.droppableId==="droppable4" && destination.droppableId==="droppable9") || (source.droppableId==="droppable9" && destination.droppableId==="droppable4")){
                this.setState({
                    morning4: result.droppable4,
                    afternoon4: result.droppable9
                });
            }
            else if((source.droppableId==="droppable5" && destination.droppableId==="droppable10") || (source.droppableId==="droppable10" && destination.droppableId==="droppable5")){
                this.setState({
                    morning5: result.droppable5,
                    afternoon5: result.droppable10
                });
            }
        }
    };

    downloadFile() {

        const columns = [
        {title: "ID", dataKey: "id"},
        {title: "Nombre", dataKey: "name"},
        {title: "Apellidos", dataKey: "lastname"},
        {title: "Edad", dataKey: "age"},
        {title: "Calificacion", dataKey: "score"},
        {title: "turno", dataKey: "shift"}
        ];

        const rows = [
        {"id": 1, "name": "Shaw", "lastname": "Palma", "age": "18", "score":"70", "shift": "M"},
        {"id": 2, "name": "Shaw", "lastname": "Nuñez", "age": "17", "score":"56", "shift": "M"},
        {"id": 3, "name": "Shaw", "lastname": "Perez", "age": "17", "score":"45", "shift": "M"},
        {"id": 4, "name": "Shaw", "lastname": "Macias", "age": "15", "score":"35", "shift": "M"},
        {"id": 5, "name": "Shaw", "lastname": "Garcia", "age": "16", "score":"20", "shift": "M"},
        {"id": 6, "name": "Shaw", "lastname": "Albarado", "age": "15", "score":"70", "shift": "M"}
        ];
        
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, rows, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 60},
            addPageContent: function(data) {
                doc.text("Aspirantes", 40, 30);
            }
        });
        doc.save('test.pdf');
        }
        
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
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.items} droppableId="items" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <CandidatesTab getItemStyle={getItemStyle} getListStyle={getListStyle} data={this.state}/>
                        </Col>
                        <Col>
                            <Button onClick={this.downloadFile}>PDF</Button>
                        </Col>
                    </Row>
                </Grid>
            </DragDropContext>
        );
    }
}


export default CandidatesManagement;