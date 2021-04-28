import React from 'react';
import ReactDOM from 'react-dom';


class Psycho extends React.Component{
    render(){
        return(
            <div className="container ">
            <h3 id="note" className="text-center p-3 border">
                Are you desperately trying to lose weight but getting nowhere?
                Have you tried every diet but just can’t stick to any?
                    <a href="/psychology_page" class="text-warning"> Our Psychologists </a>
                        can help you
            </h3>
            </div>
        )
    }
}
export default Psycho;
