import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CampaignFilter = ({ filterName, setFilterName, startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Start Date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="End Date"
        />
      </div>
    </div>
  );
};

export default CampaignFilter;
