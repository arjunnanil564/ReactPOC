import React from 'react';
import { CampaignProvider, ContextApi } from './components/ContextApi';
import Content from './components/Content';

const App = () => {
  return (
    <ContextApi>
      <Content />
    </ContextApi>
  );
};

export default App;
