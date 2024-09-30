import React from 'react';

const Table = ({ campaigns }) => {
  return (
    <table style={{ width: '100%', marginTop: '20px', border: '1px solid white', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ backgroundColor: 'skyblue',border: '1px solid white', padding: '8px' }}>Campaign Name</th>
          <th style={{ backgroundColor: 'skyblue',border: '1px solid white', padding: '8px' }}>User Name</th>
          <th style={{backgroundColor: 'skyblue', border: '1px solid white', padding: '8px' }}>Start Date</th>
          <th style={{ backgroundColor: 'skyblue',border: '1px solid white', padding: '8px' }}>End Date</th>
          <th style={{ backgroundColor: 'skyblue',border: '1px solid white', padding: '8px' }}>Active</th>
          <th style={{ backgroundColor: 'skyblue',border: '1px solid white', padding: '8px' }}>Budget</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => (
          <tr key={campaign.id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{campaign.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{campaign.username}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{campaign.startDate.toLocaleDateString()}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{campaign.endDate.toLocaleDateString()}</td>
            <td style={{ border: '1px solid black', padding: '8px', display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: campaign.active ? 'green' : 'red',  
                  }}
              ></span>
              {campaign.active ? "Active" : "Inactive"}
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{campaign.budget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
