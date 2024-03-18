import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <>
      <div className="container bg-black text-white py-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="sm:text-2xl md:text-3xl font-mono text-orange-400" to="/">
            MernFoodCart
          </Link>
          <Button className="hidden md:block">Login</Button>
          <div className="md:hidden">
            <MobileNavbar></MobileNavbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
