import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getCandidates, getCandidateSelection, updateCandidateSelection, updateCandidatesSelected } from '../../../actions';
import ProgressComponent from '../../Util/CircularProgress';
import Button from '@material-ui/core/Button';
import DroppableDetailed from '../../Util/Droppable';
import CandidatesTab from './CandidatesTab';
import DownloadCandidates from './CandidatesExcel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    // some basic styles to make the candidatesNotSelected look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? '#728EE6' : '#426AE5',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#C0C2FF' : '#9EA1FF',
    padding: grid,
    width: 250
});

class CandidatesManagement extends Component {
    constructor(){
        super();
        this.state = {
            candidatesNotSelected: [],
            morningElectronica: [],
            morningClinico: [],
            morningQuimico: [],
            morningAutomotriz: [],
            afternoonElectronica: [],
            afternoonClinico: [],
            afternoonQuimico: [],
            afternoonAutomotriz: [],
        };
        this.downloadFile = this.downloadFile.bind(this);
        this.saveCandidateSelection = this.saveCandidateSelection.bind(this);
    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        candidatesNotSelected: 'candidatesNotSelected',
        morningElectronica: 'morningElectronica',
        morningClinico: 'morningClinico',
        morningQuimico: 'morningQuimico',
        morningAutomotriz: 'morningAutomotriz',
        afternoonElectronica: 'afternoonElectronica',
        afternoonClinico: 'afternoonClinico',
        afternoonQuimico: 'afternoonQuimico',
        afternoonAutomotriz: 'afternoonAutomotriz',
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { morningElectronica, morningClinico, morningQuimico, morningAutomotriz,
            afternoonElectronica, afternoonClinico, afternoonQuimico, afternoonAutomotriz, } = this.state;
        const MAXSIZE = 50;
        const { source, destination } = result;
        console.log(source, "<-->", destination);
        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const candidatesNotSelected = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { candidatesNotSelected };

            if (source.droppableId === 'morningElectronica') {
                state = { morningElectronica: candidatesNotSelected };
            }
            if (source.droppableId === 'morningClinico') {
                state = { morningClinico: candidatesNotSelected };
            }
            if (source.droppableId === 'morningQuimico') {
                state = { morningQuimico: candidatesNotSelected };
            }
            if (source.droppableId === 'morningAutomotriz') {
                state = { morningAutomotriz: candidatesNotSelected };
            }
            if (source.droppableId === 'afternoonElectronica') {
                state = { afternoonElectronica: candidatesNotSelected };
            }
            if (source.droppableId === 'afternoonClinico') {
                state = { afternoonClinico: candidatesNotSelected };
            }
            if (source.droppableId === 'afternoonQuimico') {
                state = { afternoonQuimico: candidatesNotSelected };
            }
            if (source.droppableId === 'afternoonAutomotriz') {
                state = { afternoonAutomotriz: candidatesNotSelected };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="morningElectronica" && morningElectronica.length<MAXSIZE) || (source.droppableId==="morningElectronica" && destination.droppableId==="candidatesNotSelected")){
                    this.setState({
                        candidatesNotSelected: result.candidatesNotSelected,
                        morningElectronica: result.morningElectronica
                    });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="morningClinico" && morningClinico.length<MAXSIZE) || (source.droppableId==="morningClinico" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    morningClinico: result.morningClinico
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="morningQuimico" && morningQuimico.length<MAXSIZE) || (source.droppableId==="morningQuimico" && destination.droppableId==="candidatesNotSelected")) {
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    morningQuimico: result.morningQuimico
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="morningAutomotriz" && morningAutomotriz.length<MAXSIZE) || (source.droppableId==="morningAutomotriz" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    morningAutomotriz: result.morningAutomotriz
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="afternoonElectronica" && afternoonElectronica.length<MAXSIZE) || (source.droppableId==="afternoonElectronica" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    afternoonElectronica: result.afternoonElectronica
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="afternoonClinico" && afternoonClinico.length<MAXSIZE) || (source.droppableId==="afternoonClinico" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    afternoonClinico: result.afternoonClinico
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="afternoonQuimico" && afternoonQuimico.length<MAXSIZE) || (source.droppableId==="afternoonQuimico" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    afternoonQuimico: result.afternoonQuimico
                });
            }
            else if((source.droppableId==="candidatesNotSelected" && destination.droppableId==="afternoonAutomotriz" && afternoonAutomotriz.length<MAXSIZE) || (source.droppableId==="afternoonAutomotriz" && destination.droppableId==="candidatesNotSelected")){
                this.setState({
                    candidatesNotSelected: result.candidatesNotSelected,
                    afternoonAutomotriz: result.afternoonAutomotriz
                });
            }
            else if((source.droppableId==="morningElectronica" && destination.droppableId==="afternoonElectronica" && afternoonElectronica.length<MAXSIZE) || (source.droppableId==="afternoonElectronica" && destination.droppableId==="morningElectronica" && morningElectronica.length<MAXSIZE)){
                this.setState({
                    morningElectronica: result.morningElectronica,
                    afternoonElectronica: result.afternoonElectronica
                });
            }
            else if((source.droppableId==="morningClinico" && destination.droppableId==="afternoonClinico" && afternoonClinico.length<MAXSIZE) || (source.droppableId==="afternoonClinico" && destination.droppableId==="morningClinico" && morningClinico.length<MAXSIZE)){
                this.setState({
                    morningClinico: result.morningClinico,
                    afternoonClinico: result.afternoonClinico
                });
            }
            else if((source.droppableId==="morningQuimico" && destination.droppableId==="afternoonQuimico" && afternoonQuimico.length<MAXSIZE) || (source.droppableId==="afternoonQuimico" && destination.droppableId==="morningQuimico" && morningQuimico.length<MAXSIZE)){
                this.setState({
                    morningQuimico: result.morningQuimico,
                    afternoonQuimico: result.afternoonQuimico
                });
            }
            else if((source.droppableId==="morningAutomotriz" && destination.droppableId==="afternoonAutomotriz" && afternoonAutomotriz.length<MAXSIZE) || (source.droppableId==="afternoonAutomotriz" && destination.droppableId==="morningAutomotriz" && morningAutomotriz.length<MAXSIZE)){
                this.setState({
                    morningAutomotriz: result.morningAutomotriz,
                    afternoonAutomotriz: result.afternoonAutomotriz
                });
            }
            else
                alert("La especialidad se ha llenado.");
        }
    };

    convertDataToObject(array){
        return array.map( candidate => {
            const { idCandidate, candidateName, candidateLastNameFather, candidateLastNameMother, 
                candidateAge, candidateScore, preference} = candidate;
                return  {
                    id: idCandidate,
                    name: candidateName,
                    lastname: `${candidateLastNameFather} ${candidateLastNameMother}`,
                    age: candidateAge,
                    score: candidateScore,
                    shift: preference.preferencesShiftWished
                };
        });
    }

    downloadFile() {

        const { morningElectronica, morningClinico, morningQuimico, morningAutomotriz, afternoonElectronica,
                afternoonClinico, afternoonQuimico, afternoonAutomotriz, } = this.state;

        var currentDate = new Date();
        
        const columns = [
        {title: "ID", dataKey: "id"},
        {title: "Nombre", dataKey: "name"},
        {title: "Apellidos", dataKey: "lastname"},
        {title: "Edad", dataKey: "age"},
        {title: "Calificacion", dataKey: "score"},
        {title: "Turno", dataKey: "shift"}
        ];

        const electronica1 = this.convertDataToObject(morningElectronica);
        const clinico1 = this.convertDataToObject(morningClinico);
        const quimico1 = this.convertDataToObject(morningQuimico);
        const automotriz1 = this.convertDataToObject(morningAutomotriz);
        const electronica2 = this.convertDataToObject(afternoonElectronica);
        const clinico2 = this.convertDataToObject(afternoonClinico);
        const quimico2 = this.convertDataToObject(afternoonQuimico);
        const automotriz2 = this.convertDataToObject(afternoonAutomotriz);
        
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, electronica1, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("ELECTRÓNICA", 40, 105);
                doc.text("Matutino", 470, 105);
            }
        });
        doc.addPage();
        doc.autoTable(columns, clinico1, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("LABORATORIO CLÍNICO", 40, 105);
                doc.text("Matutino", 470, 105);
            }
        });
        doc.addPage();
        doc.autoTable(columns, quimico1, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("LABORATORISTA QUÍMICO", 40, 105);
                doc.text("Matutino", 470, 105);
            }
        });
        doc.addPage();
        doc.autoTable(columns, automotriz1, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("MANTENIMIENTO AUTOMOTRIZ", 40, 105);
                doc.text("Matutino", 470, 105);
            }
        });

        doc.addPage();
        doc.autoTable(columns, electronica2, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("ELECTRÓNICA", 40, 105);
                doc.text("Vespertino", 470, 105);
            }
        });
        doc.addPage();
        doc.autoTable(columns, clinico2, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("LABORATORIO CLÍNICO", 40, 105);
                doc.text("Vespertino", 470, 105);
            }
        });

        doc.addPage();
        doc.autoTable(columns, quimico2, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("LABORATORISTA QUÍMICO", 40, 105);
                doc.text("Vespertino", 470, 105);
            }
        });
        doc.addPage();
        doc.autoTable(columns, automotriz2, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 125},
            didDrawPage: function(data) {
                doc.text("DICTAMEN DE ADMITIDOS", 200, 60);
                doc.text(`Fecha: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`, 440, 80);
                doc.text("MANTENIMIENTO AUTOMOTRIZ", 40, 105);
                doc.text("Vespertino", 470, 105);
            }
        });

        doc.save('Aspirantes admitidos.pdf');
    }                       

    componentDidMount(){
        this.props.getCandidates();
        this.props.getCandidateSelection();
    }

    componentWillReceiveProps(props){
        if(props.candidatesSelected.candidatesNotSelected!==undefined)
            this.setState(props.candidatesSelected);
    }

    saveCandidateSelection(){
        this.props.updateSelection(this.state);
        this.props.updateCandidatesSelection(this.state);
    }
        
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Grid>
                    <Row>
                        <Col xs={3}>
                            <Row center="xs" className="topSpace">    
                                <DownloadCandidates data={this.props.candidatesData}/>
                            </Row>
                            <Row center="xs">
                                <Col xs={12}>
                                    <DroppableDetailed getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.candidatesNotSelected} droppableId="candidatesNotSelected" />
                                </Col>
                            </Row>
                            <Row center="xs" className="bottomSpace">
                                <Col md={4} className="savebuttonCandidates">
                                    <Button variant="contained" color="primary" onClick={this.saveCandidateSelection} disabled={this.props.updateSelectionFlag}>Guardar</Button>
                                    { this.props.updateSelectionFlag && <ProgressComponent size={24}/> }
                                </Col>
                                <Col md={4}>
                                    <Button variant="contained" color="secondary" onClick={this.downloadFile}>PDF</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <CandidatesTab getItemStyle={getItemStyle} getListStyle={getListStyle} data={this.state} />
                        </Col>
                    </Row>
                </Grid>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    candidatesData: state.candidatesData,
    candidatesSelected: state.candidatesSelected,
    updateSelectionFlag : state.updateCandidatesSelection
});

const mapDispatchToProps = dispatch => ({
    getCandidates: () => dispatch(getCandidates()),
    getCandidateSelection: () => dispatch(getCandidateSelection()),
    updateCandidatesSelection: value => dispatch(updateCandidateSelection(value)),
    updateSelection: value => dispatch(updateCandidatesSelected(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesManagement);