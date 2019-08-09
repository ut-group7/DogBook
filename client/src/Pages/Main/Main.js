import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Map from '../Content/Gmap';
import './Main.css';
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
            <h2 className="h1 display-3">Canine Connections</h2>
            <p className="mapinfo">
                Bringing and connecting lost pets back with their families. Austin map showing locations of lost pets.
            </p>
            <a className="map">
                <Map />
            </a>
            <hr className="my-2" />
            <h2 className="h1 display-3 text-center">Lost Pets</h2>
            <p>
             Have you seen any of the pets? If you have, please click on the picture to provide information where the pet was last seen. 
            </p>

            <MDBRow>
            <MDBCol>
                <p className="view overlay my-4">
                <img src={Pic1} alt="pics" style={{ width: "300px", height: "300px" }}/>
                </p>
            </MDBCol>
            <MDBCol>
                <p className="view overlay my-4">
                <img src={Pic2} alt="pics" style={{ width: "300px", height: "300px" }}/>
                </p>
            </MDBCol>
            <MDBCol>
                <p className="view overlay my-4">
                <img src={Pic3} alt="pics"style={{ width: "300px", height: "300px" }}/>
                </p>
            </MDBCol>
         </MDBRow>
        </MDBJumbotron>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default Main;