import { useState } from "react";
import House from "../../../models/House";
import housesData from "../../../data/houses";
import HouseCard from "../../../components/Cards/HouseCard";

const PopularHouses = () => {
  const [houses] = useState<House[]>(housesData);

  return (
    <section className="pb-8">
      <header className="text-2xl md:text-3xl font-bold my-10 ">
        Popular Houses
      </header>
      <div className="grid gap-4 grid-fluid">
        {houses?.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
    </section>
  );
};
export default PopularHouses;
