import React, { memo } from 'react';
import '../assets/scss/main.scss';
import Header from './Header';

const MemoizedHeader = memo(() => <Header />);

const Template = ({ children }) => (
  <div>
    <MemoizedHeader />
    {children}
  </div>
);

export default Template;
