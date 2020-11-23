import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';

import Photo from './assets/prof-4.jpg';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray text-center">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font" style={{ fontSize: '1.5em' }}>
                Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <img
                style={{ maxWidth: '400px' }}
                src={Photo}
                alt="Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
