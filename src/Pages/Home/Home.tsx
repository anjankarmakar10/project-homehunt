import Hero from "./sections/Hero";
import PopularHouses from "./sections/PopularHouses";
import PopularLocations from "./sections/PopularLocations";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 pt-20">
        <PopularLocations />
        <PopularHouses />
      </div>
    </>
  );
};
export default Home;