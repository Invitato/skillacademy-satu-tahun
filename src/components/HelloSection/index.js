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
    title: 'Hari / Tanggal',
    desc: 'Rabu / 25 November 2020',
  },
  {
    title: 'Waktu',
    desc: '07.30 – 11.30 WIB ',
  },
  {
    title: 'Tempat',
    desc: `
    Daring melalui Zoom <br /> <a href="https://us02web.zoom.us/j/88174841488?pwd=YzhvVHlKdHlUNEFmTG01ZE1iWk1qUT09">LINK ZOOM</a>
    `,
  },
  {
    title: 'Meeting ID',
    desc: '881 7484 1488',
  },
  {
    title: 'Passcode',
    desc: '343088',
  },
  {
    title: 'Zoom Background',
    desc: ` <a href="https://user-images.githubusercontent.com/10141928/99877468-0858f780-2c31-11eb-85e6-63965ba4d87d.jpg" ${{
      ...LINK,
    }}>LINK UNDUH</a>
    `,
  },
];

function HelloSection({ isInvitation }) {
  return (
    <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 fh5co-heading">
            <div className="text-center">
              <img src={UDINUS_LOGO} alt="logo udinus" />
              <p className="info title-logo">
                <strong>REKTOR UNIVERSITAS DIAN NUSWANTORO</strong>
              </p>
              <p className="info">
                Mengharap dengan hormat Bapak/Ibu/Saudara/i untuk menghadiri Sidang Senat Terbuka Universitas Dian
                Nuswantoro, dalam rangka
              </p>
              <p className="info">
                <strong className="title-logo">Pengukuhan dan Orasi Ilmiah</strong> <br />
                <strong style={{ fontSize: '1.5em' }}>Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA.</strong>
                <br />
                <strong className="title-logo">Guru Besar Bidang Ilmu Akuntansi</strong>
              </p>
            </div>

            <p className="info">Yang akan diselenggarakan pada:</p>
            <table>
              <tbody>
                {TIMELINE.map((i) => (
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <span className="text-table" style={{ marginRight: '8px' }}>
                        {i.title}
                      </span>
                    </td>
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

            <div className="text-center">
              <p className="info">Atas perhatian dan kehadiran Bapak/Ibu/Saudara/i diucapkan terima kasih.</p>
              <p className="info">
                Semarang, 15 November 2020 <br />
                Rektor, <br /> <strong>Prof. Dr. Ir. Edi Noersasongko, M.Kom.</strong>
              </p>
              <hr />
            </div>

            {/* NOTES FROM OWNER */}
            <p className="notes">Catatan :</p>
            <ol className="notes">
              <li>
                Mohon Senat Universitas Dian Nuswantoro dan Senat Kehormatan dapat mengenakan Toga, dan untuk tamu undangan
                lain dapat menyesuaikan.
              </li>
              <li>
                Dimohon Tamu undangan daring diharapkan dapat bergabung pada link zoom tersebut diatas pada jam
                07.30-08.45 karena pada saat prosesi senat berlangsung link zoom akan ditutup.
              </li>
            </ol>
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
