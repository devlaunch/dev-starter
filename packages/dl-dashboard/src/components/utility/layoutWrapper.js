import React from 'react';
import { LayoutContentWrapper } from './layoutWrapper.style';

export default props => (
  <LayoutContentWrapper
    className={
      props.className != null
        ? `${props.className} dlLayoutContentWrapper`
        : 'dlLayoutContentWrapper'
    }
    {...props}
  >
    {props.children}
  </LayoutContentWrapper>
);
