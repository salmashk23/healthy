import React from 'react';
import { Container, Button, Input,Form,FormGroup, Label, Col,Row, Card, CardImg, CardBody, CardFooter, CardText,  } from 'reactstrap';
import './istory_posts.css';

class CommentBox extends React.Component {
  constructor() {
    super()
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddPost() {
    let message = this.state.message;
    fetch('/istory',{
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(res => res.json())
      .then(json => {window.location.reload()}
      );
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {!this.props.picture_url &&
                  <div id="content" className="add-post  text-light m-3 p-3">
                    You Need To <a className="text-warning " href="/login_page">Login</a> In Order To Add A Post
                  </div>
                }
            
            {this.props.picture_url &&
                  <div className="p-2" id="content">
                   <h3 className="user-name text-center text-warning" >Create Your Own Post</h3>
                    <div className="d-flex m-3 align-items-start">
                      <img 
                        className="rounded-circle" 
                        src={process.env.PUBLIC_URL + '/img/users/user_f1.png'} 
                        width="50"
                        height="50"/>
                      <Input 
                        type="textarea" 
                        className="form-control m-2 pl-4 pr-4 shadow-none textarea" 
                        name="post" 
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="mt-2 text-center">
                      <Button 
                        className="btn btn-warning mr-4 mb-3 pl-5 pr-5 shadow-none"
                        type="submit" 
                        onClick={() => this.handleAddPost()}>
                          Post
                      </Button>
                    </div>
                  </div>
                }
              
            {this.props.post.UserPost.map((item, index) => (
                <Card id="content" className="mt-4 p-4" key={index}>
                  <CardBody className="d-flex flex-row">
                    <img 
                      className="rounded-circle" 
                      src={process.env.PUBLIC_URL + item.picture_url} 
                      width="50"
                      height="50" />
                    <CardText>
                      <h4 className="user-name d-block text-light  p-2">{item.name}</h4>
                      <h6 className="date text-warning text-left ml-2">
                        {new Date(item.date).toISOString().split('T')[0]}
                      </h6>
                      <p className="comment-text text-light"><i>{item.message}</i></p>
                    </CardText>
                  </CardBody>
                </Card>
                ))}
            </Col>
          </Row>
        </Container>


    )
  }
}

export default CommentBox