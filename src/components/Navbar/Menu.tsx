import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <MenuItem>Home</MenuItem>
        </li>
        <li>
          <MenuItem>Houses</MenuItem>
        </li>
        <li>
          <MenuItem>About</MenuItem>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
