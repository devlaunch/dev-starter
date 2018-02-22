import React from 'react';
import { Banner, Heading, Lead } from 'rebass';

const Hero = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <Banner color="gray.8" bg="white">
      <Heading is="h1" fontSize={[5, 6, 7, 8]}>
        {appName.toLowerCase()}
      </Heading>
      <Lead fontSize={[2, 3, 4, 5]} fontWeight="thin">
        A place to share your knowledge.
      </Lead>
    </Banner>
  );
};

export default Hero;
