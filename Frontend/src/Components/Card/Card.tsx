import React from "react";

interface Props {
  CompanyName: string;
  ImageLink: string;
  Price: string;
  Description: string;
}

const Card : React.FC<Props> = ({ ImageLink, CompanyName, Price, Description }) => {
  return (
    <div className="">
      <img
        className="w-[300px] h-[200px] object-cover"
        src={ImageLink}
        alt="coffee image"
      />
      <div className="w-[300px]">
        <h2>{CompanyName}</h2>
        <p>{Price}</p>
        <p className="truncate">{Description}</p>
      </div>
    </div>
  );
};

export default Card;
