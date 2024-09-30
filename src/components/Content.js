import React from 'react';
import Filter from './Filter';
import Table from './Table';

import { useCampaigns } from './ContextApi';

const Content = () => {
  const { filteredCampaigns, error, filterName, setFilterName, startDate, setStartDate, endDate, setEndDate } = useCampaigns();

 
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Campaign Filter</h1>
      <Filter
        filterName={filterName}
        setFilterName={setFilterName}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Table campaigns={filteredCampaigns} />
    </div>
  );
};

export default Content;
