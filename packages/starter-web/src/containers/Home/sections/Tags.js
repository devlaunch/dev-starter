import React from 'react';
import { Container, Heading, Text } from 'rebass';
import { Tag } from 'components';

const TagList = (props) => {
  const { tags } = props.tags;
  const handleClick = (ev, tag) => {
    ev.preventDefault();
    props.onClickTag(tag);
  };

  if (tags) {
    return (
      <Container color="gray.8" bg="white">
        <Heading is="h2" fontSize={[4, 5, 6, 7]}>
          Explore more
        </Heading>
        {tags.map(tag => <Tag onClick={handleClick(tag)}>{tag}</Tag>)}
      </Container>
    );
  }
  return <Text>Loading Tags...</Text>;
};

export default TagList;
