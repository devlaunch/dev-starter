import React from 'react';
import BoxTitleWrapper from './boxTitle';
import { BoxWrapper } from './box.style';

export default props => (
  <BoxWrapper className={`${props.className} dlBoxWrapper`} style={props.style}>
    <BoxTitleWrapper title={props.title} subtitle={props.subtitle} />
    {props.children}
  </BoxWrapper>
);
