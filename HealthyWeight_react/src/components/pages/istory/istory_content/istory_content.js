import React from 'react';
import DescStory from './desc_content/description.js';
import FormComponent from './post_content/posts.js';
import CommentBox from './post_content/discussion';


class StoryContent extends React.Component {
    render(){
        console.log("hi",this.props.content)
        return (
            <div className="container-fluid">
                <DescStory desc={this.props.content}/>
                {/* <FormComponent post={this.props.content} /> */}
                <CommentBox post={this.props.content} />
            </div>
        );
    }
}

export default StoryContent;
