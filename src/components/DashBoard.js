import React, { Component } from 'react';
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';

export default class DashBoard extends Component {




    render() {
        return (
            <div>




<nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                  <a className="navbar-brand" href="/discount" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>


                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
                  </div>

              </div>
          </nav>




                <div className="dashHeader">
                    <h1><u>DashBoard</u></h1>
                    <span>Still Developing......! තාම හදල නෑ යකෝ</span>
                </div>
                
            </div>
        )
    }
}