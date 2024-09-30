import React, { createContext, useContext, useEffect, useState } from 'react';

const CampaignContext = createContext();

export const useCampaigns = () => {
  return useContext(CampaignContext);
};

export const ContextApi = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  
const [error, setError] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error in response');
        }
        const data = await response.json();
        const currentdate = new Date();
        const campaignsWithDates = data.map((user, index) => {
          const startDate = new Date(2024, index+5, index + 1);
          const endDate = new Date(2024, index+10, index + 5);
          return {
            id: user.id,
            name: "Campaign " + (index + 1),
            username: user.name,
            startDate: startDate,
            endDate: endDate,
            active: currentdate >= startDate && currentdate <= endDate,
            budget: index * 100 + 50 + "K USD"
          };
        });

        setCampaigns(campaignsWithDates);
      } catch (err) {
        setError('Failed to fetch campaigns');
      } 
    };

    fetchCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) => {
    const namefilter = campaign.name.toLowerCase().includes(filterName.toLowerCase());
    const datefilter = (!startDate || campaign.startDate >= startDate) &&
                      (!endDate || campaign.endDate <= endDate);
    return namefilter && datefilter;
  });

  return (
    <CampaignContext.Provider value={{
      campaigns,
      filteredCampaigns,
      error,
      filterName,
      setFilterName,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
    }}>
      {children}
    </CampaignContext.Provider>
  );
};
