import React from 'react';

const SearchHistory = ({ recentSearches = [] }) => {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-xl font-bold">Recent Searches</h2>
      <ul>
        {recentSearches.map((city, index) => (
          <li key={index} className="text-gray-700">{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
