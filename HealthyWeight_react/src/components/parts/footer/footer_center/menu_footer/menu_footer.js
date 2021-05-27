import React from 'react';


class FooterLinks extends React.Component{
        render(){
            return(
                <ul id="footerLinks">
                    {this.props.footerCenter.MenuFooter.map((item,i) => {
                        return(
                            <li key={i} className={item.cName} >
                                <a  href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                                    )
                                }

                        )
                    }
                </ul>
            );
        }
    }

export default FooterLinks;
