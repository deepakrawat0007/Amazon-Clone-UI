import React, { useState } from 'react';

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

function StateDropdown() {
  const [selectedState, setSelectedState] = useState("");

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  }

  return (
    <div>
      <label htmlFor="state-select">Select a state:</label>
      <select id="state-select" value={selectedState} onChange={handleChange}>
        <option value="">--Select--</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
}

export default StateDropdown;
