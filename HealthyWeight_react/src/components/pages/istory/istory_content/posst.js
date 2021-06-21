import React from 'react';


var commentData = [
  { 
    author:"Shawn Spencer", 
    text:"I've heard it both ways"
  },
  { 
    author:"Burton Guster", 
    text:"You hear about Pluto? That's messed up" 
  }
];

class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      data: commentData
    }
  }

  handleCommentSubmit(comment) {
    this.state.data.push(comment);
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  }
  render(){
    console.log(this.state.data)
    return (
      <div className="comment-box">
        <CommentForm data={this.state.data} onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}


class CommentList extends React.Component{

  render(){

     return (
      <div className="comment-list">
        {this.props.data.map((item)=>{
          return (
            <Comment author={item.author} text={item.text} />
          );
        })}
      </div>
    );
  }
}


class CommentForm extends React.Component{
  constructor(props){
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }
  render() {
    return(
      <form className="comment-form form-group" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon">Name</span>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-addon">Comment</span>
          <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    );
  }
}

class Comment extends React.Component{
  render() {
    return (
      <div className="comment">
        <h2 className="author">{this.props.author}</h2>
        {this.props.text}
      </div>
    );
  }
};


export default CommentBox;