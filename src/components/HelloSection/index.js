import React from 'react';
import { bool } from 'prop-types';

import UDINUS_LOGO from '../WelcomeSection/img/udinus.png';

import { styWrapper } from './styles';

const LINK = {
  className: 'link',
  target: '_blank',
  rel: 'noreferrer',
};

const TIMELINE = [
  {
    title: 'Day / Date',
    desc: 'Friday / 27th November 2020',
  },
  {
    title: 'Time',
    desc: '16.30 - end (Punctual) ',
  },
  {
    title: 'Place',
    desc: `
    Only by Zoom <br /> <a href="https://ruangguru.zoom.us/j/5628507941">LINK ZOOM</a>
    `,
  },
  {
    title: 'Zoom Background',
    desc: ` <a href="https://drive.google.com/file/d/1xgKDbsac6o_sjrp5r0ACyiBWZhx7SwsO/view?usp=sharing" ${{
      ...LINK,
    }}>LINK DOWNLOAD</a>
    `,
  },
  {
    title: 'Dresscode',
    desc: 'Wear your comfortable outfit and be polite',
  },
];

function HelloSection({ isInvitation }) {
  return (
    <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 fh5co-heading">
            <div>
              <p className="info text-center">
                <strong className="pr-co" style={{ fontSize: '2.5em' }}>
                  You Are Invited!
                </strong>
              </p>

              <p className="info">
                Dear, <br />
                <b>Business & Content Team, </b>
                <br /> We would like to invite you to come to Skill Academy 1st Anniversary. It will be held:
              </p>
            </div>
            <table>
              <tbody>
                {TIMELINE.map((i) => (
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <span className="text-table" style={{ marginRight: '8px' }}>
                        {i.title}
                      </span>
                    </td>
                    <td style={{ paddingRight: '8px', verticalAlign: 'top' }}>:</td>
                    <td style={{ verticalAlign: 'top' }}>
                      <span
                        className="text-table"
                        style={{ fontWeight: 'bold' }}
                        dangerouslySetInnerHTML={{ __html: i.desc }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <p className="info">Come come! We looking forward to seeing you for having fun together. See you soon!</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
