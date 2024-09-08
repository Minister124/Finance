import React, { useState } from "react";

const Search: React.FC<{}> = () => {
  const [search, setSearch] = useState<string>("");

  const onClick = (e: any) =>{ //any is whatever there in string
    setSearch(e.target.value);
    console.log(e);
  } 
  return (
    <div>
      <input value={search} onChange={(e) => onClick(e)} />
    </div>
  );
};

export default Search;
