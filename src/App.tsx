import * as React from 'react';
import Accordian from './Accordian';
import data from './details';
import './style.css';

export default function App() {
  return data.map((value) => <Accordian {...value} />);
}
