import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ArticleContent from './article_content/article_content.js';


class Articles extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <ArticleContent/>
                <Footer/>
            </div>
        );
    }
}

export default Articles;
