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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddPost() {
    fetch('/istory',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "post" : this.state.post })
      })
      .then(res => res.json())
      .then((json) => {
        window.location.reload();
      }
      );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          {this.props.picture_url &&
                <div className="p-2" id="content">
                  <div className="d-flex flex-row align-items-start">
                    <img 
                      className="rounded-circle" 
                      src={ process.env.PUBLIC_URL + this.props.picture_url} 
                      width="50"
                      height="50" />
                    <Input 
                      type="textarea" 
                      className="form-control mr-1 shadow-none textarea" 
                      name="post" 
                      onChange={this.handleInputChange}/>
                  </div>
                  <div className="mt-2 text-right">
                  <Button 
                    className="btn btn-primary btn-sm shadow-none"
                    type="submit" 
                    onClick={() => this.handleAddPost()}>
                      Post
                  </Button>
                  </div>
                </div>
              }
              {!this.props.picture_url &&
                <div id="content" className="add-post  text-light m-3 p-3">
                  You Need To <a className="text-warning " href="/login_page">Login</a> In Order To Add A Post
                </div>
              }
            {this.props.post.UserPost.map((item, index) => (
                <Card id="content" className="m-3 p-3" key={index}>
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
                      <p className="comment-text text-light"><i>{item.post}</i></p>
                      
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