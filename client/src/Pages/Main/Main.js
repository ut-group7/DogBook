import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Map from '../Content/Gmap';
import './Main.css';
import InfoCard from '../../Components/InfoCard/InfoCard';
import Pic1 from '../Content/pic1.png';
import Pic2 from '../Content/pic2.png';
import Pic3 from '../Content/pic3.png';
import Pic4 from '../Content/pic4.png';



const Main = () => {
  return (
    <MDBContainer className="mt-5 text-left">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Canine Connection</h2>
            <p className="mapinfo">
                Re-uniting lost pets with their families. 
            </p>
            <p className="mapinfo">
                - See missing pets in your neighborhood below -
            </p>
            <a className="map">
                <Map />
            </a>
            <hr className="my-2" />
            <h2 className="h1 display-3 text-center">Recent Listings</h2>
            <p className="mapinfo">
             Have you seen any of the pets? If you have, please click on the picture to provide information where the pet was last seen. 
            </p>

          <MDBRow>
            <MDBCol>
              <InfoCard />
            </MDBCol>
         </MDBRow>
        </MDBJumbotron>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default Main;