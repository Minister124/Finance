import Card from "../Card/Card";

interface Props {};

const CardList = (props: Props) => {
  return (
    <div>
      <Card ImageLink="https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" CompanyName="Apple" Price="$112" Description="This is shit"/>
      <Card ImageLink="https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" CompanyName="Apple" Price="$112" Description="This is shit"/>
      <Card ImageLink="https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" CompanyName="Apple" Price="$112" Description="This is shit"/>
      <Card ImageLink="https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" CompanyName="Apple" Price="$112" Description="This is shit"/>
    </div>
  );
};

export default CardList;
