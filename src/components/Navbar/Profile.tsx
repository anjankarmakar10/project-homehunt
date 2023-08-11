const Profile = () => {
  return (
    <div className="dropdown dropdown-end w-8 flex ">
      <label tabIndex={0} className="btn btn-ghost  btn-sm btn-circle avatar">
        <div className="w-8 rounded-full border">
          <img src="https://img.freepik.com/free-icon/man_318-677829.jpg" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
