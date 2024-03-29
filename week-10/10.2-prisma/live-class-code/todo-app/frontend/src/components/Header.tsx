import { FaNoteSticky } from "react-icons/fa6";
import { useUserContext } from "../contexts/UserContext";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const { isLoggedIn } = useUserContext();
  return (
    <header className="w-full h-16 md:h-20 bg-stone-950 shadow-2xl">
      <nav className="w-full h-full flex items-center justify-between px-4 md:px-12 lg:px-20">
        {/* logo */}
        <div className="flex items-center gap-1 text-2xl md:text-3xl">
          <FaNoteSticky />
          <span className="font-semibold">ToDos</span>
        </div>
        {/* menu */}
        <div>{isLoggedIn && <LogoutBtn />}</div>
      </nav>
    </header>
  );
};

export default Header;
