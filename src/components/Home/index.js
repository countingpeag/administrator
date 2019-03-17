import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getN, saveN, updateN, deleteN } from '../../actions';
import Cards from './Card';
import NewNews from './NewNews';
import NavBar from '../NavBar';

import '../../styles/HomeStyle.css';

class News extends Component {
    constructor(){
        super();

        this.state={
            news:[],
            count:0,
        }    
        this.addNews = this.addNews.bind(this);
        this.deleteNews = this.deleteNews.bind(this);
    } 

    deleteNews(news){
        this.props.deleteNews(news.idNew);
        let newsArray = this.state.news.filter(element => element.idNew!==news.idNew);
        this.setState({news: newsArray});
    }

    addNews(news){ 
            let newsArray = this.state.news;
            let size = newsArray.length;
            if(size!==0)
                news.idNew=(newsArray[size-1].idNew+1);
            else
                news.idNew=1;
                

            newsArray.push(news);
            this.setState({news:newsArray});
    }

    componentDidMount(){
        this.props.getNews(true);
    }   
      
    componentWillReceiveProps(props){
        this.setState({news:props.News});
    }

    render() {

        const { updateNews } = this.props;
        this.state.news.sort((a,b)=>a.priority-b.priority);
        return (
            <div>
                <NavBar />
                <Grid  >
                    <Row end="xs">
                            <Col xs={3} md={1} className="addNews">
                                <Row center="xs">
                                    <NewNews save={this.props.saveNews} addNews={this.addNews} />
                                </Row>     
                            </Col>
                    </Row>
                    <Row start="xs" className="newsContent" >
                        {
                        this.state.news.map(item => (
                            <Col xs={12} lg={6} key={item.idNew}>
                                <Row center="xs">
                                    <Col>
                                        <Cards data={item} save={this.props.saveNews} deleteNews={this.deleteNews} updateNews={updateNews}/>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                        }
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        saveNews: value => dispatch(saveN(value)),
        getNews: value => dispatch(getN(value)),
        updateNews: value => dispatch(updateN(value)),
        deleteNews: value => dispatch(deleteN(value))
    }
);

const mapStateToProps = state => (
    {
        News: state.getNews,
        addedNews: state.saveNews
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(News);