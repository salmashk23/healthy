import React from "react"
import TypeWriterEffect from 'react-typewriter-effect';

class SubTitle extends React.Component{
    render(){
        return(
            <TypeWriterEffect
                        textStyle={{
                                fontFamily: 'Dancing Script',
                                color: '#C66900 ',
                                fontSize: '60px',
                                padding:'20px',
                                textAlign: "center",
                                }}
                       startDelay={150}
                       cursorColor="white"
                       text="for a healthier life"
                       typeSpeed={200}

                     />

        )
    }
}

 export default SubTitle;
