import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from './assets/favicon-invitato.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';
import './assets/custom-styles.css';

const TITLE = `Skill Academy Satu Tahun`;
const IMAGE_URL = `https://cdn2.skillacademy.com/assets/575bd3ffbd/SkillAcademyLogo.078db88b6699c842664dff11cb3d7172.png  `;
const META_DESCRIPTION = `Dear, Business & Content Team, We would like to invite you to come to Skill Academy 1st Anniversary. It will be held at Friday, 27th November 2020. Come come! We looking forward to seeing you for having fun together. See you soon!`;

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
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Nerko+One&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
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
