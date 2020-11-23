import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';

import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';

import LogoUdinus from './img/udinus.png';
import { PROF_NAME_CAPITAL } from '@/constants';
import { styWrapper, styHero, styBackground } from './styles';

const DELAY_TIME = 500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-10 col-md-offset-1 text-center">
              <img src={LogoUdinus} alt="udinus logo" />
              <div style={{ margin: '0 0 24px 0' }}>
                <h4 className="sub-title">SIDANG SENAT TERBUKA</h4>
                <h4 className="sub-title">UNIVERSITAS DIAN NUSWANTORO</h4>
                <h4 className="sub-title">SEMARANG</h4>
              </div>
              <h4 className="sub-title" style={{ marginBottom: '-16px' }}>
                PENGUKUHAN DAN ORASI ILMIAH
              </h4>
              <h1 className="title">{PROF_NAME_CAPITAL}</h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              <Fragment>
                <h3 className="to-dearest">Kepada YTH:</h3>
                <h2 className="to-dearest-name">{guestName}</h2>
              </Fragment>
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
  guestName: 'Bapak / Ibu / Saudara',
};

export default WelcomeSection;
