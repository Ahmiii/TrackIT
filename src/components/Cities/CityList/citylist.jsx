import React from "react";
import CitySummary from "./CitySummary/citySummary";

const citylist = ({ cities }) => {
  return (
    <div>
      {cities &&
        cities.map((city) => {
          return <CitySummary city={city} key={city.id} />;
        })}
    </div>
  );
};
export default citylist;
