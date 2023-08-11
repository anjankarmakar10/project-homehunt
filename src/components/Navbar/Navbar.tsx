import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Profile from "./Profile";

const Navbar = () => {
  const active = false;

  return (
    <div className="mx-auto  sticky w-full top-0 z-50 bg-base-100">
      <nav className="navbar px-4">
        <div className="navbar-start">
          <MobileMenu />
          <Logo />
        </div>
        <Menu />
        <div className="navbar-end gap-2 items-center">
          <div className="flex items-center gap-3">
            <div className="py-1 px-2 border-[1px] flex items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition">
              <DarkMode />
              <div>
                {active ? (
                  <Profile />
                ) : (
                  <button className="btn btn-sm rounded-full">Sign In</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
