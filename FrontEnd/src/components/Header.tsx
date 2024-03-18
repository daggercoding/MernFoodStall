import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <>
      <div className="container bg-black text-white py-6 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-3xl text-orange-400" to="/">
            MernFoodCart
          </Link>
          <Button className="sm:hidden md:block">Login</Button>
          <div className="md:hidden">
            <MobileNavbar></MobileNavbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
