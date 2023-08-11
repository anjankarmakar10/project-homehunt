import MenuItem from "./MenuItem";

const MobileMenu = () => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <MenuItem>Item 1</MenuItem>
        </li>
        <li>
          <MenuItem>Item 2</MenuItem>
        </li>
        <li>
          <MenuItem>Item 3</MenuItem>
        </li>
      </ul>
    </div>
  );
};
export default MobileMenu;
