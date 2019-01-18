import React from 'react';
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';

export { TextBlock, MediaBlock, TextRow, RectShape, RoundShape };

export const Placeholder = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <TextBlock color="#E0E0E0" rows={7} />;
  }
  return null;
};
