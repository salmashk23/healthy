import React , {Component} from "react";



let commentCounter = 1;

class Main extends React.Component {
constructor() {
super();
this.state = {
commentValue: "",
commentLine: [{ commentId:"", text: "", }],
  };
}
handleCommentValue = (e) => {
this.setState({
commentValue: e.target.value,
});
};

setCommentLine = () => {
this.setState({
commentLine: [ this.state.commentLine,
{ commentId: commentCounter++, text: this.state.commentValue }],
commentValue: "",
});}

submitCommentLine = (e) => {
e.preventDefault();
this.setCommentLine();
};
enterCommentLine = (e) => {
if (e.charCode === 13) {
this.setCommentLine();
}
};

render() {
return (
    <CommentBox
    commentValue={this.state.commentValue}
    handleCommentValue={this.handleCommentValue}
    enterCommentLine={this.enterCommentLine}
    submitCommentLine={this.submitCommentLine}
    />

    )}
}

export default class CommentBox extends Component {
    render() {
        const { commentValue, handleCommentValue,enterCommentLine, submitCommentLine} = this.props;
        const enableCommentButton = () => {
            return (commentValue ? false : true);
        }
        const changeCommentButtonStyle = () => {
            return (commentValue ? "comments-button-enabled" : "comments-button-disabled");
        }
        return (
            <div className="comments-box">
                <input onKeyPress={enterCommentLine} value={commentValue}
                    id="comments-input" onChange={handleCommentValue}
                        type="text" placeholder="Add a comment..." />
                <button onClick={submitCommentLine} type="submit" className="comments-button"id={changeCommentButtonStyle()}
                    >Post</button>
            </div>
)}}




class Comment extends Component {
    render() {
        const { commentLine } = this.props;
        return (
            <ul className="comments-list">
                {commentLine.map((val) => {return <li className="each-comment" key={val.commentId}>{val.text}</li>})}
            </ul>
        )};
}
