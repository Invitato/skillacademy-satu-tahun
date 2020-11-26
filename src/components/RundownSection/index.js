import React from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

import { BU_COMPETITION, CO_COMPETITION, TT_COMPETITION } from './finalis-data';

function HelloSection({ isInvitation }) {
  const renderCard = (ITEMS, type = 4) => {
    return (
      <div className="row text-center">
        {ITEMS.map((item) => (
          <div className={'col-md-6 text-center'}>
            <div
              style={{
                border: '1.3px solid #e6e1e1',
                borderRadius: '24px',
                margin: '8px 0',
                padding: '8px 16px',
                minHeight: '315px',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{item.title}</p>
              <div class="row text-center">
                {item.data.map((p) => {
                  const isSingle = item.data.length === 1;

                  return (
                    <div>
                      <div className={isSingle ? 'row' : ''}>
                        <div className={isSingle ? 'col-md-6 col-md-offset-3' : 'col-md-6 '}>
                          <img
                            src={p.imgUrl}
                            alt={p.name}
                            style={{ maxWidth: '100%', display: 'block', margin: '0 auto;', borderRadius: '50%' }}
                          />
                          {!isSingle && (
                            <p class="info" style={{ fontSize: '1.3em' }}>
                              {p.name}
                            </p>
                          )}
                        </div>
                      </div>
                      {isSingle && (
                        <div className="row">
                          <p class="info" style={{ fontSize: '1.3em' }}>
                            {p.name}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                <strong className="pr-co" style={{ fontSize: '2em' }}>
                  Finalist of <br />
                  Business Idea Competition
                </strong>
                <br />
                Business Idea Competition is a developing idea for Skill Academy in many aspects in order to achieve
                life long learning mission. So, who’s the winner?
              </p>

              <hr style={{ marginBottom: '24px' }} />
              {renderCard(BU_COMPETITION)}
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
                  Finalist of <br />
                  Content Design Competition
                </strong>
                <br />
                Content Design Competition is a developing idea of learning content for Skill Academy in order to
                achieve effectiveness of lifelong learning. So, who’s the winner?
              </p>

              <hr style={{ marginBottom: '24px' }} />
              {renderCard(CO_COMPETITION)}
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
                  Finalist of <br />
                  TikTok Competition
                </strong>
                <br />
                Fun is one of our CHIEF as Ruangguru’s employee. In order to celebrate Skill Academy 1st anniversary,
                TikTok Competition held for telling the untold story of Skill Academy in a part of promotion. So, who’s
                the winner?
              </p>

              <hr style={{ marginBottom: '24px' }} />
              {renderCard(TT_COMPETITION)}
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
