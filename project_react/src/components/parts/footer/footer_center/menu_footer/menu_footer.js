import React from 'react';
import ReactDom from 'react-dom';
import MenuFooter from './footer_menu_item.js';


class FooterLinks extends React.Component{
    constructor(props){
        super(props)
    }
        render(){
            return(
                <ul id="footerLinks">
                    {this.props.footerCenter.MenuFooter.map((item => {
                        return(
                            <li className={item.cName} >
                                <a  href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                                    )
                                }
                            )
                        )
                    }
                </ul>
            );
        }
    }

export default FooterLinks;
