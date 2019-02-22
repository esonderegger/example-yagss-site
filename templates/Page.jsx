import React from 'react';
import Base from './Base.jsx';

export default props => (
  <Base {...props}>
    <section className="article" dangerouslySetInnerHTML={{ __html: props.content }} />
  </Base>
);
