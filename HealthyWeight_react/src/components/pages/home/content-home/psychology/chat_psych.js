import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './chat_psych.css'
import logo from './psych1.png';


class Chat extends Component {
  componentDidMount() {
    addResponseMessage('Are you desperately trying to lose weight but getting nowhere?Have you tried every diet but just can’t stick to any? I can help you');
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="Chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Need A Help?"
          subtitle="Pr. Jhon Doe"

        />
      </div>
    );
  } 
}

export default Chat;
