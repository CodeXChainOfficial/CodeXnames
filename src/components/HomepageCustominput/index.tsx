import React, { useState } from "react";
import { Button, Text } from "components";

type HomepageCustominputProps = Partial<{
  searchtext: string;
  search: string;
  onSearch: (text: string) => void;
}>;

const HomepageCustominput: React.FC<HomepageCustominputProps> = ({
  searchtext = "Search for your name.cdx",
  search,
  onSearch,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <div className="flex items-center justify-start p-2.5 w-full border border-gray-700 rounded-lg">
      <input
        type="text"
        placeholder={searchtext}
        value={searchInput}
        onChange={handleInputChange}
        className="bg-transparent text-white-A700 w-full focus:outline-none"
        maxLength={64}
      />
      <Button
        onClick={handleSearch}
        className="bg-light_blue-A700 cursor-pointer font-inter font-semibold px-4 py-3.5 rounded-lg text-base text-center text-white-A700 text-xl ml-2"
      >
        {search}
      </Button>
    </div>
  );
};

HomepageCustominput.defaultProps = {
  search: "Search",
};

export default HomepageCustominput;
