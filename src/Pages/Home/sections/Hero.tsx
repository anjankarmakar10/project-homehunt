import SearchInput from "../../../components/SearchInput/SearchInput";

const Hero = () => {
  return (
    <header className="hero-bg min-h-[600px] relative flex justify-center items-center px-4 pb-8">
      <div className="opacity-layer"></div>
      <section className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold ">
          Your House is Waiting For You!
        </h1>
        <h2 className="text-2xl mt-2 text-white">
          Houses and apartments for rent that fit your timeline.
        </h2>
        <div>
          <SearchInput />
        </div>
      </section>
    </header>
  );
};
export default Hero;
