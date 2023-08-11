import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
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
export default Menu;
