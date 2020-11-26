import React from 'react';
import { bool } from 'prop-types';

import { DATA as RUNDOWN_DATA } from './rundown-data';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <>
      <div css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                <strong className="pr-co" style={{ fontSize: '2em' }}>
                  Finalist of Business Idea Competition
                </strong>
                <br />
                Business Idea Competition is a developing idea for Skill Academy in many aspects in order to achieve
                life long learning mission. So, who’s the winner?
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* ANOTHER FINALIST */}
      <div css={styWrapper} className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                <strong className="pr-co" style={{ fontSize: '2em' }}>
                  Finalist of Content Design Competition
                </strong>
                <br />
                Content Design Competition is a developing idea of learning content for Skill Academy in order to
                achieve effectiveness of lifelong learning. So, who’s the winner?
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* ANOTHER FINALIST */}
      <div css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                <strong className="pr-co" style={{ fontSize: '2em' }}>
                  Finalist of TikTok Competition
                </strong>
                <br />
                Fun is one of our CHIEF as Ruangguru’s employee. In order to celebrate Skill Academy 1st anniversary,
                TikTok Competition held for telling the untold story of Skill Academy in a part of promotion. So, who’s
                the winner?
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
