import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Book from '@material-ui/icons/Book';
import School from '@material-ui/icons/School';
import StudentManagement from './StudentManagement';
import SubjectManagement from './SubjectManagement';
import NavBar from '../NavBar';
import '../../styles/ManagementStyle.css';

class Management extends Component {
    
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
        <div>
            <NavBar />
            <Grid id="container">
                <Row>
                    <Col> 
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
                        </Tabs>
                        </AppBar>

                        {value === 0 && <StudentManagement />}
                        {value === 1 && <SubjectManagement />}
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default Management;