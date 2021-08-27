import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './incs/Vmc';
import Service1 from '../img/second.jpeg';

function Home(){
    return(
        <div>
              <Slider/>
       
      <section className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h3 className="main-heading">our company</h3>
                      <div className="underline mx-auto"></div>
                        <p>
                        What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and
                        </p>
                        <Link to="/about" className="btn btn-warning shadow"> read more </Link>
                      
                  </div>
              </div>
          </div>
      </section>
      {/*                                vision  */}
      <VMC/>
      {                                                /* services */ }
      <section className="section border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-center">
                    <h3 className="main-heading"> our services</h3>
                    <div className="underline mx-auto"></div>
                     
                    
                </div>
                
                    <div className="col-md-4">
                        <div className="card shadow">
                        <img src={Service1} className="w-100 border-bottom" alt="services"/>
                            <div className="card-body">
                                   <h6> service 1</h6>
                                   <div className="underline"></div>
                                       <p>
                                       What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </p>
                                       <Link to="/services" className="btn btn-link">read more</Link>
                                   </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                        <div className="card shadow">
                        <img src={Service1} className="w-100 border-bottom" alt="services"/>
                            <div className="card-body">
                                   <h6> service 1</h6>
                                   <div className="underline"></div>
                                       <p>
                                       What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </p>
                                       <Link to="/services" className="btn btn-link">read more</Link>
                                   </div>
                            </div>

                        </div>
                       
                    </div>
                  
                </div>
            
        
    </section>
       </div>
    );
}

export default Home;