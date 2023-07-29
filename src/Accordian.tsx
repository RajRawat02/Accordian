import * as React from 'react';
import './style.css';

export default function Accordian({ content, id, title }) {
  const [expand, setExpand] = React.useState(false);

  const handleClick = () => {
    setExpand((x) => !x);
  };

  return (
    <div key={id}>
      <div className="accordian-header">
        <div>{title}</div>
        <button onClick={handleClick}>{expand ? '-' : '+'}</button>
      </div>
      <div className="accordian-content">{expand ? content : ''}</div>
    </div>
  );
}
