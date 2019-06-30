import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { characterSize } from './../Util/Validations';
import decode from 'jwt-decode';

import '../../styles/HomeStyle.css';

class NewNews extends React.Component {

    constructor(){
        super();

        this.state={
            open: false,
            priotity: '',
            content: '',
            selectedFile:'',
            img64: '',
            auxOpen: true,
        }   

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    auxOpenFunc= () =>{
        this.setState({auxOpen: true})
    }

    auxCloseFunc= () =>{
        this.setState({auxOpen: false})
    }

    handleChange = (event) => {
        switch(event.target.name){
            case 'priotity':
                this.setState({priotity: event.target.value});
                break;
            case 'content':
                this.setState({content: event.target.value});
                break;
            default:
                console.log('wrong content');
                break;
        }
    }

    handleSubmit = (currentDate, save) => {

        const { content, img64, priotity } = this.state;
        
        const adminObj = decode(localStorage.getItem('tokenAuth'));
        const objToSend = {
            newContent: content,
            image: img64,
            date: currentDate,
            priority: priotity,
            administrator: { idAdministrator: adminObj.idAdministrator }
        }; 

        const objToUpdate = {
            newContent: content,
            image: img64,
            date: currentDate,
            priority: priotity,
            administrator: adminObj 
        };

        const min = 9;
        const max = 401;

        if(characterSize(content, min, max) && priotity!==''){
            this.props.addNews(objToUpdate);
            save(objToSend);
            
            this.setState({open: false});
        }
        if(priotity==='')
            alert("Seleccione prioridad.");
    }
    
    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    selectedIMGChangedHandler = (event) => {
        const file = event.target.files[0]
        this.setState({selectedFile: event.target.files[0]})
        
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
                this.setState({img64: reader.result})
        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        this.setState({img64: 'img error'})
        }
    }
    

    render() {
        const inputCSS = {
            display: 'none',
        };

        const buttonN = {
            
        }

        var currentdate = new Date(); 

        var day = currentdate.getDate()
        var month = (currentdate.getMonth()+1)
        var seconds = currentdate.getSeconds()
        var minutes = currentdate.getMinutes()
        var hours = currentdate.getHours()
        if(day<10){
            day = '0'+day
        }
        if(month<10){
            month = '0'+month
        }
        if(seconds<10){
            seconds = '0'+seconds
        }
        if(minutes<10){
            minutes = '0'+minutes
        }
        if(hours<10){
            hours = '0'+hours
        }
        var date = currentdate.getFullYear() + "-" + month + "-" + day;
        var time = hours + ":" + minutes + ":" + seconds;

        return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleOpen}>
                <AddIcon />
            </Button>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">Nueva Noticia</DialogTitle>
            <DialogContent>
                <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <TextField
                        id="content"
                        name="content"
                        label="Noticia"
                        multiline
                        rowsMax="4"
                        value={this.state.content}
                        onChange={this.handleChange}
                        className="content"
                        margin="normal"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <FormControl className="proirity">
                        <InputLabel htmlFor="priotity">Prioridad</InputLabel>
                        <Select
                            value={this.state.priotity}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'priotity',
                            id: 'priotity',
                            }}
                        >
                            <MenuItem value={'1'}>Alta</MenuItem>
                            <MenuItem value={'2'}>Media</MenuItem>
                            <MenuItem value={'3'}>Baja</MenuItem>
                        </Select>
                        </FormControl>
                    </Col>
                    <Col xs={5} className="time">
                        {
                            "Fecha: "+date
                        }
                    </Col>
                    <Col xs={4} className="time">
                        {
                            "Hora: "+time
                        }
                    </Col>
                </Row>
                <Row>
                <input
                            accept="image/*"
                            style={inputCSS}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={this.selectedIMGChangedHandler}
                            
                        />
                    <Col xs={4}>
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span" style= {buttonN}>
                                Imagen
                            </Button>
                        </label>
                    </Col>
                    <Col xs={8}>
                        {this.state.selectedFile.name}
                    </Col>
                </Row>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.handleSubmit(currentdate, this.props.save)} color="primary">
                Aceptar
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                Cancelar
                </Button>
            </DialogActions>
            </Dialog>

            
        </div>
        );
    }
}

export default NewNews; 
