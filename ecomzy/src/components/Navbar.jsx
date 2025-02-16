import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
     const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img
              className="h-12 w-auto ml-5"
              src="../assets/somping.png"
              alt="myimg"
            />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/cart">
          <div className="relative">
            <BsCart4 className="text-2xl" />
            {
              cart.length > 0 && (
                <span  className="absolute -top-1 -right-0 bg-green-600 text-xs w-4 h-4 
                flex justify-center items-center animate-bounce rounded-full text-white "> 
                {cart.length}</span>
              )
            }
             
          </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
