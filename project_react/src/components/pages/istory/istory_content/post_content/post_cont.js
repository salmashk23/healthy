import React from "react";

class Main extends React.Component {
constructor() {
super();
this.state = {
commentValue: “”,
commentLine: [{ commentId:””, text: “”, }],
  };
}
handleCommentValue = (e) => {
this.setState({
commentValue: e.target.value,
});
};
