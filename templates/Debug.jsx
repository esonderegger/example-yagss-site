import React from 'react';
import Base from './Base.jsx';

export default (props) => {
  const title = props.subTemplate ? (
    <h1><a href={props.relativeURL}>{props.title}</a></h1>
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
      </header>
      <section>
        <pre>
        {JSON.stringify(props, null, 2)}
        </pre>
      </section>
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
