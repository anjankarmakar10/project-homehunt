import Hero from "./sections/Hero";
import PopularHouses from "./sections/PopularHouses";
import PopularLocations from "./sections/PopularLocations";
import Reviews from "./sections/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 pt-20">
        <PopularLocations />
        <PopularHouses />
        <Reviews />
      </div>
    </>
  );
};
export default Home;
