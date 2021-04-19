import React from "react";
import { Container} from "reactstrap";



class FooterBottom extends React.Component {
    render() {
        return (
            <div className="footer-copyright text-center py-3">
              <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#!" className="text-white"> HealthyWeight.com </a>
              </Container>
            </div>
        );
    }
}

export default FooterBottom;
