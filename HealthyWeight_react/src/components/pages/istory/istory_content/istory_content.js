import React from 'react';
import DescStory from './desc_content/description.js';
import FormComponent from './post_content/posts.js';


class StoryContent extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <DescStory desc={this.props.content}/>
                <FormComponent post={this.props.content} />
            </div>
        );
    }
}

export default StoryContent;
