import React from 'react';

export interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

const Searchbar = ({ value, onChange }: SearchbarProps) => {

  return (
    <>
      <input type="search" placeholder="Type to search" value={value} onChange={(e) => onChange(e.target.value)} />
    </>
  );
};

export default Searchbar;
