import React, { Component } from 'react';
import pimage from '../Content/mission.png';
import styled from 'styled-components';

class Mission extends Component {
  render() {
    return (
      <ComponentMission className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mission-template">
              <div>
                <img src={pimage} className='page-image' width="100%" height="100%" alt='pimage' />
              </div>
              <h1>History & Mission</h1>
              <br />
              <h2>Mission</h2>
              <div className="mission-details">
              Canine Connection application that helps search for lost and homeless pets find their way to loving homes through search of lost pets, rescue and adoption.
              </div>
              <h2>Vision</h2>
              <div className="mission-details">
              A world free of lost, homeless, neglected or abused pets.
              </div>
              <h2>History</h2>
              <div className="mission-details">
              The Canine Connection app was developed in 2019 as part of the University of Texas Web-Development BootCamp.
              </div>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="mission-template">
            The
            </div>
          </div> */}

        </div>
      </ComponentMission>
    );
  }
}

export default Mission;

const ComponentMission = styled.div`
  .mission-template {
    padding: 30px 15px;
    text-align: left;
  }

  .mission-details {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;
