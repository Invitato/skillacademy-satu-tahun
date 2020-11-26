import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { photos } from './photo-data';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray text-center">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font" style={{ fontSize: '2.5em' }}>
                Throwback of <br /> Work from Office
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <ImageGallery autoPlay infinite lazyLoad items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
