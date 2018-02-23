import React from 'react';
import { Container, Heading, Lead } from 'rebass';
import { ArticleList } from 'components/ArticleList';

const GlobalArticleFeed = props => (
  <Container color="gray.8" bg="white">
    <Heading is="h2" fontSize={[4, 5, 6, 7]}>
      Featured Articles
    </Heading>
    <Lead fontSize={[2, 3, 4, 5]} fontWeight="thin">
      Keep expanding your horizon
    </Lead>
    <ArticleList articles={props.articles} />
  </Container>
);

export default GlobalArticleFeed;
