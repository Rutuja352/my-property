import React from 'react';
import VMC from './incs/Vmc';

function About(){
    return(
      <div> 
          <section className="py-4 bg-info">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 my-auto">
                          <h4> about us</h4>
                      </div>
                      <div className="col-md-8 my-auto">
                          <h6 className="float-end">
                              Home/About us
                          </h6>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section bg-c-light border-bottom">
              <div className="container">
                  <h5 className="main-heading"> our company</h5>
                  <div className="underline"></div>
                  <p> fghghjhgfrtyyhggfderftghyujik</p>
              </div>
          </section>
          <VMC/>
      </div>
    );
}

export default About;