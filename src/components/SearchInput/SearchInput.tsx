const SearchInput = () => {
  return (
    <label className="mx-auto mt-8 bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl">
      <input
        placeholder="Search your location"
        className="px-6 py-3 md:py-2 w-full rounded-md flex-1 outline-none bg-white text-black text-center md:text-start "
      />
      <button className="btn bg-[#04152D] hover:bg-neutral w-full md:w-auto px-6 py-3   text-white rounded-xl  text-sm font-semibold">
        Search
      </button>
    </label>
  );
};
export default SearchInput;
