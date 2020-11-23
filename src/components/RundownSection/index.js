import React from 'react';
import { bool } from 'prop-types';

import { DATA as RUNDOWN_DATA } from './rundown-data';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p className="info">
              <strong>Agenda Kegiatan</strong> <br />
              <strong>Pengukuhan dan Orasi Ilmiah</strong> <br />
              <strong style={{ fontSize: '1.4em' }}>Prof. Dr. St. Dwiarso Utomo, SE.,M.Kom., Akt., CA.</strong> <br />
              <strong>Guru Besar Bidang Ilmu Akuntansi</strong> <br />
              <strong>Hari / Tanggal : Rabu, 25 November 2020 </strong> <br />
            </p>

            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th style={{ width: '100px' }}>Waktu</th>
                  <th>Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {RUNDOWN_DATA.map((i) => (
                  <tr>
                    <td>{i.time}</td>
                    <td style={{ textAlign: 'left' }}>
                      <span
                        style={{
                          textTransform: 'unset',
                          fontWeight: 'normal',
                          color: 'var(--font-black-ui)',
                          fontSize: '14px',
                          letterSpacing: 'normal',
                        }}
                        dangerouslySetInnerHTML={{ __html: i.desc }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
