import React from 'react';
import Base from './Base.jsx';

export default (props) => {
  const title = props.link ? (
    <h1><a href={props.link}>{props.title}</a></h1>
  ) : (
    <h1>{props.title}</h1>
  );
  const mainElement = (
    <article className="article">
      <header>
        {title}
        {
          props.description ? (
            <span>{props.description}</span>
          ) : null
        }
        {
          props.subTemplate ? (
            <span>·
              <a href={props.relativeURL} className="permalink" title="Permalink">∞</a>
            </span>
          ) : null
        }
      </header>
      <section dangerouslySetInnerHTML={{__html: props.content}} />
    </article>
  )
  if (props.subTemplate) {
    return mainElement;
  }
  return (
    <Base {...props}>
      {mainElement}
    </Base>
  );
};
