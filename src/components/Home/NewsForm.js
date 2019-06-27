import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import {Grid, Row, Col} from 'react-flexbox-grid';
class NewsForm extends Component{
    constructor(){
        super();
        this.state={
            selectedFile:'',
            modi:'',
            
        }     
    }

    handleChange = (item, event, currentdate) => {
       this.setState({modi:'Y'})
       item.date = currentdate;
        switch(event.target.name){
            case 'priotity':
                item.priority = event.target.value 
                break;
            case 'content':
            item.newContent = event.target.value
                break;
            default:
                console.log('wrong content');
                break;
        }
    }

    selectedIMGChangedHandler = (item,event) => {
        const file = event.target.files[0];
        this.setState({selectedFile: event.target.files[0]});
        
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            item.image = reader.result;
        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        this.setState({img64: 'img error'});
        }
    }



    render(){
        const inputCSS = {
            display: 'none',
        };

        var currentdate = new Date(); 
        var day = currentdate.getDate()
        var month = (currentdate.getMonth()+1)
        var seconds = currentdate.getSeconds()
        var minutes = currentdate.getMinutes()
        var hours = currentdate.getHours()
        if(day<10){ day = '0'+day }
        if(month<10){ month = '0'+month }
        if(seconds<10){ seconds = '0'+seconds }
        if(minutes<10){ minutes = '0'+minutes }
        if(hours<10){ hours = '0'+hours }
        var date = currentdate.getFullYear() + "-" + month + "-" + day;
        var time = hours + ":" + minutes + ":" + seconds;

        const { openWin, actionNew, handleYesResponse, handleNoResponse, itemToModify } = this.props;
        
        return(
        <Dialog
            open={openWin}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{actionNew} Noticia</DialogTitle>
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
                            value={itemToModify.newContent}
                            onChange={(e)=>this.handleChange(itemToModify, e, currentdate)}
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
                                value={itemToModify.priority}
                                onChange={(e)=>this.handleChange(itemToModify,e,date,time)}
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
                                onChange={(e)=>this.selectedIMGChangedHandler(itemToModify,e)}
                        />
                        <Col xs={4}>
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span">
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
                <Button onClick={()=>handleYesResponse(itemToModify)} color="primary">
                    Aceptar
                </Button>
                <Button onClick={()=>handleNoResponse()} color="primary" autoFocus>
                    Cancelar
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}
export default NewsForm;