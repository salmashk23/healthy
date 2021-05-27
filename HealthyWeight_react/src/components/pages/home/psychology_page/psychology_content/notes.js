import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./psych.css";


class Notes extends React.Component{
    render(){
        return (
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                interval={4000}
                >
                {this.props.note.Note.map((item,i) => {
                    return(
                        <div key={i} className="m-5 p-5" id="caro-content">
                            <h4 className="text-light display-4"> {item.content} </h4>
                            <h3 className="text-light"> {item.written_by} </h3>
                        </div>
                         )
                        })
                }
            </Carousel>
            );
        }
    }

export default Notes;
