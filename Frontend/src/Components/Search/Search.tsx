import React, {
  ChangeEvent,
  MouseEvent,
  useState
} from "react";

const Search: React.FC<{}> = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  //   const onClick = (e: any) =>{ //any is whatever there in string
  //     setSearch(e.target.value);
  //     console.log(e);
  //   }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input className="border-4" value={search} onChange={(e) => handleChange(e)} />
      <button className="w-4 mb-10 h-6 border-2" onClick={(e) => onClick(e)}/>
    </div>
  );
};

export default Search;
