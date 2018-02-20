import React from 'react';
import { Banner, Heading, Text } from 'rebass';

const Hero = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <Banner>
      <Heading f={[4, 5, 6, 7]}>{appName.toLowerCase()}</Heading>
      <Text>A place to share your knowledge.</Text>
    </Banner>
  );
};

export default Hero;
