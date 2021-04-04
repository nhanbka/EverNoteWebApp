import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">

            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Evernote++</h5>
        
                <p>Bring evernote to your own server</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Github</h5>
        
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://github.com/nhanbka/EverNoteWebApp" target="blank" className="text-dark">Evernote Web Application</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Facebook</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/nhanbka99/" target="blank" className="text-dark">Lê Trọng Nhân</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>© 2021 Copyright nhanbka99</div>
        </footer>
    )
}

export default Footer
