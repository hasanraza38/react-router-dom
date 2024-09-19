import React from "react";
import Carousel from "../components/carousel/carousel";
import Card from "../components/branches card/card";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="mt-5">
        <h1 className="text-center text-3xl font-bold text-black">
          Our Branches
        </h1>
        <div className="flex justify-center items-center gap-5 flex-wrap  m-5">
          <Card
            title="Defence Chapter"
            address="Dolmen City, HC-3, sea view road, Marine Promenade, Karachi"
          />

          <Card
            title="North Nazimabad Chapter"
            address="Sharah-e-Sher Shah Suri, Block C North Nazimabad Town, Karachi, Karachi City, Sindh"
          />

          <Card
            title="Bahadurabad Chapter"
            address="V3J8+FM2, Bahadurabad Bahadur Yar Jang CHS, Karachi, Karachi City, Sindh"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
