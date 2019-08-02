import React from 'react';
import styled from 'styled-components';
import './footer.css';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
            <div className="row">
            {/* Column 0 */}
                <div className="col-md-3 col-sm-6">  
                <h4>Resources</h4>
                <ul className="list-unstyled">
                    <li>
                    {/* CanineConnection Blog */}
                    <a href="https://www.facebook.com/groups/austinlostandfoundpets/">Lost&Found Facebook</a>
                    </li>
                    <li>
                    
                    <a href = "mailto: fred1n@hotmail.com">Email Support: admin@canineconnection.com</a>
                    </li>
                </ul>
                </div>   
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">  
                <h4>About US</h4>
                <ul className="list-unstyled">
                    <li><a href="/">
                    CanineConnection Mission
                    </a></li>
                    <li><a href="/">
                    How CanineConnection Works
                    </a></li>
                    <li><a href="/">
                    FAQs
                    </a></li>
                </ul>
                </div>  
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">  
                <h4>Local Services</h4>
                <ul className="list-unstyled">
                <li><a href="/">
                    Grooming 
                    </a></li>
                    <li><a href="/">
                    Doggie Day Cares
                    </a></li>
                    <li><a href="/">
                    Training
                    </a></li>
                    <li><a href="/">
                    Local Veterinarians
                    </a></li>
                </ul>
                </div>  
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">  
                <h4>Legal Links</h4>
                <ul className="list-unstyled">
                <li><a href="/">
                    Privacy Policy
                    </a></li>
                    <li><a href="/">
                    Terms of Services
                    </a></li>
                </ul>
                </div>  
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Canine Connection App - All Rights Reserved
                </p>
            </div>
        </div>
        </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainBlue);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainDark);
  }

  ul li a:hover {
    color: var(--mainWhite);
  }
`;
