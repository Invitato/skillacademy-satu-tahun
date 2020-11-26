import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';

import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import RundownSection from '@components/RundownSection';
import PhotoSection from '@components/PhotoSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || 'Bapak / Ibu / Saudara');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection isInvitation={isInvitation} />
        <RundownSection isInvitation={isInvitation} />
        <PhotoSection />
        <FooterSection />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={finalTicketLink}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
