import React, { ChangeEvent, useState } from "react";

const Search: React.FC<{}> = () => {
  const [search, setSearch] = useState<string>("");

//   const onClick = (e: any) =>{ //any is whatever there in string
//     setSearch(e.target.value);
//     console.log(e);
//   } 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{ 
    setSearch(e.target.value);
    console.log(e);
  } 

  const onClick = () =>{
    
  }
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={onClick}></button>
    </div>
  );
};

export default Search;
