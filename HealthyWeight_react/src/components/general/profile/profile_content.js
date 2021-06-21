import React from 'react';
import {Card,  CardBody, CardTitle, CardText } from 'reactstrap';


class ContentProfile extends React.Component{
    render(){
        return(
            <div>
                <Card  className="my-4 p-3" id="card">
                    <CardBody>
                        <CardTitle tag="h3">Account Info</CardTitle>
                        <CardText>
                            Name: {this.props.content.name} <br/>
                            E-mail: {this.props.content.email} <br/>
                            Age : {this.props.content.age} <br/>
                            Height: {this.props.content.height} <br/>
                            Weight: {this.props.content.weight} <br/>
                        </CardText>
                    </CardBody>
                </Card>  
            </div>
        )
    }
}
export default ContentProfile;