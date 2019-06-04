import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AlertDialog from '../AlertDialog'
import NewsForm from './NewsForm'
import decode from 'jwt-decode';
import '../../styles/HomeStyle.css';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Cards extends React.Component {

  constructor(){
    super();

    this.state={
        open: false,
        priotity: '',
        content: '',
        alertaDelete: false,
        openEdit: false,
        itemSelected: '',
    }   
  }

  handleShowEdit = () =>{
    this.setState({openEdit:true})
  }
  handleDismissEdit = () => {
    this.setState({openEdit:false})
  }

  handleEditNew = (item) =>{

    const adminObj = decode(localStorage.getItem('tokenAuth'));
    const objEdited = {
      idNew: item.idNew,
      newContent: item.newContent,
      image: item.image,
      date: item.date,
      priority: item.priority,
      administrator: { idAdministrator: adminObj.idAdministrator }
    };
    this.props.updateNews(objEdited);
    this.setState({openEdit:false})
  }

  handleShowAlertDelete=(item)=>{
    this.setState({alertaDelete:true, itemSelected:item})
  }

  handleDismissAlertDelete=()=>{
    this.setState({alertaDelete:false})
  }

  handleDeleteNew=()=>{
      this.setState({alertaDelete:false})
      this.props.deleteNews(this.state.itemSelected);
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

  handleSubmit = (date, time, save) => {
    const { priotity, content } = this.state;
    const news = {
        content,
        priotity,
    }; 
    save(news);
    this.setState({open: false});
  }
  
  render() {

    //data variable is the data which was send by the index.js file when the component is called
    const { data, classes } = this.props;
    var date = new Date(data.date);
    return (
      
        <Card className="card">
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {data.administrator.adminName[0]+data.administrator.adminLastNameFather[0]}
              </Avatar>
            }
            title={data.administrator.adminName+" "+data.administrator.adminLastNameFather+" "+data.administrator.adminLastNameMother}
            subheader={  date.getDate() + "/" + (date.getMonth()+1) +  "/" + date.getFullYear() 
                      + " " + date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds()}
            
          />

          { data.image.length>0
            ? <CardMedia
              className={classes.media}
              /*image={require("../../images/test1.jpeg")}*/
              image={data.image}
              title="Love"
              />
            :  null
          }
          

          <CardContent>
              <Typography component="p">
                {data.newContent}
              </Typography>
              <IconButton aria-label="Edit">
                <EditIcon onClick={() => this.handleShowEdit()}/>
              </IconButton>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => this.handleShowAlertDelete(data) }/>
              </IconButton>
            </CardContent>

          <NewsForm openWin={this.state.openEdit}
                    actionNew={'Editar'}
                    handleYesResponse={this.handleEditNew} 
                    handleNoResponse={this.handleDismissEdit}
                    itemToModify = {data}
          />

          <AlertDialog 
              openAlert={this.state.alertaDelete}
              titleAlert={"ELIMINAR NOTICIA"} 
              contentAlert={"¿ESTA SEGURO QUE DESEA ELIMINAR ESTA NOTICIA?"}
              handleYesResponse={this.handleDeleteNew}
              handleNoResponse={this.handleDismissAlertDelete}
              
          />
         
        </Card>
      
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);