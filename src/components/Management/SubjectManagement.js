import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import ProgressComponent from '../Util/CircularProgress';
import { findSubject, updateSubject, addSubject } from '../../actions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import '../../styles/SubjectStyle.css';

class SubjectManagement extends Component{

    constructor(){
        super();

        this.state = {
            subjectName: '',
            subjectLevel: '',
            nameToFind: '',
            updateName: '',
            updateLevel: '',
            id: 0,
            subjects: []
        };
        this.remove = this.remove.bind(this);
        this.append = this.append.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.findSubject = this.findSubject.bind(this);
        this.addSubject = this.addSubject.bind(this);
    }

    updateSubject(subject){
        const { updateName, updateLevel } = this.state;
        subject.subjectName=updateName;
        subject.subjectLevel=Number(updateLevel);
        this.props.update(subject);
    }

    addSubject(){
        this.props.add(this.state.subjects);
    }

    findSubject(){
        const { nameToFind } = this.state;
        if(nameToFind.length>=4)
            this.props.find(nameToFind);
    }

    remove(subject){
        let subjectArray = this.state.subjects.filter(element => element!==subject);
        this.setState({subjects:subjectArray});
    }

    append(){
        const {subjectName, subjectLevel ,subjects, id} = this.state;

        if(subjectName.length>=4 && subjectLevel!==""){
            let subject = {
                subjectKeyCode: id,
                subjectName: subjectName,
                subjectLevel: subjectLevel
            }

            let subjectsArray = subjects;
            let newId = id;
            newId++;

            subjectsArray.push(subject);
            this.setState({subjects: subjectsArray, id: newId});
        }
    }
    
    handleChange(event){
        let {id, value} = event.target; 
        if(id==="name")
            this.setState({subjectName:value});
        else if(id==="nameFind")
            this.setState({nameToFind:value});
        else if(id==="level")
            this.setState({subjectLevel:value});
        else if(id==="updateName")
            this.setState({updateName:value.trim()});
        else if(id==="updateLevel")
            this.setState({updateLevel:value.trim()});
    }

    componentWillReceiveProps(props){
        let { subjectName, subjectLevel } = props.subjectInfo;

        this.setState({updateName:subjectName});
        this.setState({updateLevel:subjectLevel});
    }

    render(){
        const { updateName, updateLevel, subjects } = this.state; 
        const { subjectInfo, searchState, updateState, addState } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={4} className="deleteSubject">
                        <Row center="xs">
                            <h2>Actualizar Materia</h2>
                        </Row>
                        <Row center="xs" middle="xs">
                            <Col>
                                <TextField
                                id="nameFind"
                                label="Nombre"
                                placeholder="Materia"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                                />
                            </Col>
                            <Col className="searchSubject">
                                <Button  variant="contained" color="primary" onClick={this.findSubject} disabled={searchState}>Buscar</Button>
                                {searchState && <ProgressComponent size={24} />}   
                            </Col>
                        </Row>
                        <div className="infoModule">
                        
                            <h3>id: {subjectInfo.subjectKeyCode}</h3>
                            <h3>Nombre:
                                <Input
                                    id="updateName"
                                    value={`  ${updateName}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <h3>Semestre:
                                <Input
                                    id="updateLevel"
                                    value={`  ${updateLevel}`}
                                    inputProps={{'aria-label': 'Description'}}
                                    onChange={this.handleChange}
                                />
                            </h3>
                            <div className="updateSubject">
                                <Button  variant="contained" color="secondary" onClick={() => this.updateSubject(subjectInfo)} disabled={subjectInfo.subjectKeyCode===undefined || updateState===true? true : false}>Guardar</Button>
                                { updateState && <ProgressComponent size={24} />} 
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={7} className="appendSubject">
                        <Row center="xs">
                            <h2>Agregar Materia</h2>
                        </Row>
                        <Row center="xs">
                            <Col xs={6} md={5}>
                                <TextField
                                id="name"
                                label="Nombre"
                                placeholder="Nombre de la materia"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                id="level"
                                label="Nivel"
                                placeholder="Semestre de la materia"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={12} md={3} className="addSubject">
                                <Button  variant="contained" color="primary" onClick={this.append}>Agregar</Button>
                            </Col>
                        </Row>
                        <ul>
                            {this.state.subjects.map(subject => (
                                <li key={subject.subjectKeyCode}>
                                    <Chip 
                                        label={subject.subjectName}
                                        onDelete={() => this.remove(subject)}
                                        color="primary"  
                                        variant="outlined"
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="saveSubject">
                            <Button  variant="contained" color="primary" onClick={this.addSubject} disabled={addState===true || subjects.length<=0 ?true:false}>Guardar</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    find: value => dispatch(findSubject(value)),
    update: value => dispatch(updateSubject(value)),
    add: value => dispatch(addSubject(value))
});

const mapStateToProps = state => ({
    subjectInfo: state.subjectInfo,
    searchState: state.searchSubject,
    updateState: state.updateSubject,
    addState: state.addSubject
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectManagement);