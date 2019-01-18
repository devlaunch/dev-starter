import React from 'react';
import { ContentHolderWrapper } from './contentHolder.style';

export default props => (
  <ContentHolderWrapper className="dlExampleWrapper" style={props.style}>
    {props.children}
  </ContentHolderWrapper>
);
