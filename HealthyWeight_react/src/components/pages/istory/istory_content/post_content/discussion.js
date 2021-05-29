import React from "react";
import { Button, Input, Form, Col, Row } from 'reactstrap';
import './discussion.css'


class CommentBox extends React.Component {
    constructor(props) {
      super(props);     
      this.state = {
        showComments: false,
        comments: this.props.disc
      };
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
                <div className="comment-box p-4">
                <h3 className="text-center h2 m-5"> Join the Discussion! </h3>
                <CommentForm addComment={this._addComment.bind(this)}/>
                <Button className="btn-warning" id="comment-reveal" onClick={this._handleClick.bind(this)}>
                    {buttonText}
                </Button>
                <h3>Comments</h3>
                <h4 className="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>
                {commentNodes}
                </div> 
      );
    } // end render
    
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
            <Form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <Input type="text" className="mb-5 text-dark" placeholder="Your Name" required innerRef={(Input) => this._author = Input}/>
                <Input type="textarea" className="mb-5 text-dark" placeholder="What's on your mind?" rows="4" required innerRef={(textarea) => this._body = textarea}/>
                <Button className="btn-outline-light btn-lg btn-block mt-5" type="submit">Post</Button>
            </Form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div >
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
          </div>
        </div>
      );
    }
    _deleteComment() {
      alert("-- DELETE Comment Functionality COMMING SOON...");
    }
  }
  
  
  
export default CommentBox ;