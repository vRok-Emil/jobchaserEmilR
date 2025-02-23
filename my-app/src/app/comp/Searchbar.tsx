"use client"
import React from "react";

interface SearchbarProps {
  searchWord?: string;
  setSearchWord?: React.Dispatch<React.SetStateAction<string>>;
  searchFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Searchbar: React.FC<SearchbarProps> = ({
  searchWord,
  setSearchWord,
  searchFunction
}) => {
  return (
    <form>

        <input onChange={searchFunction} className="SerachbarJob" type="text" placeholder="Search...❤️" />
        
        </form>
  );
};
