import React from 'react';
import DescStory from './desc_content/description.js';
import CommentBox from './post_content/istory_posts.js';



class IstoryContent extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <DescStory desc={this.props.content}/>
                <CommentBox 
                    post={this.props.content} 
                    picture_url={this.props.picture_url} />
            </div>
        );
    }
}

export default IstoryContent;
