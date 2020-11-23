import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from './assets/favicon-invitato.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';
import './assets/custom-styles.css';

const TITLE = `Pengukuhan dan Orasi Ilmiah: Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA.`;
const IMAGE_URL = `https://user-images.githubusercontent.com/10141928/99893193-b1dece00-2caf-11eb-8c15-5a13a75b0354.jpg`;
const META_DESCRIPTION = `REKTOR UNIVERSITAS DIAN NUSWANTORO Mengharap dengan hormat Bapak /Ibu / Saudara untuk menghadiri Sidang Senat Terbuka Universitas Dian Nuswantoro, dalam rangka : Pengukuhan dan Orasi Ilmiah : Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:url" content="https://indrakusuma.web.id" />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" itemprop="image" content={IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://indrakusuma.web.id" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&family=Roboto+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
