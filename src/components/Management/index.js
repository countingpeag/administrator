import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Book from '@material-ui/icons/Book';
import School from '@material-ui/icons/School';
import People from '@material-ui/icons/People';
import Work from '@material-ui/icons/Work';
import { withStyles } from '@material-ui/core/styles';
import StudentManagement from './Students/StudentManagement';
import SubjectManagement from './Subjects/SubjectManagement';
import TeacherManagement from './Teacher/TeacherManagement';
import CandidatesManagement from './Candidates/CandidatesManagement';
import NavBar from '../NavBar';
import '../../styles/ManagementStyle.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });
  

class Management extends Component {
    
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { classes } = this.props;
        return (
        <div>
            <NavBar />
            <Grid id="container">
                <Row>
                    <Col className={classes.root}> 
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                scrollable
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Alumnos" icon={<School />} />
                                <Tab label="Materias" icon={<Book />} />
                                <Tab label="Maestros" icon={<Work />} />
                                <Tab label="Aspirantes" icon={<People />} />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <StudentManagement />}
                        {value === 1 && <SubjectManagement />}
                        {value === 2 && <TeacherManagement />}
                        {value === 3 && <CandidatesManagement />}
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default withStyles(styles)(Management);