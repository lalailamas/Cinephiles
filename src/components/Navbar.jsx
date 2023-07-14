import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
<div className="h-40 w-full bg-custom-red">
  <div className='dashed-line' >
      <div className="w-full h-full flex direction row space-x-11">
        <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
          <div className="mx-4">
            <Link to="/">
              <img
                src={`./src/assets/Cinephileslogo.svg`}
                alt={`Logo Cinephiles`}
                className="flex h-20"
              />
            </Link>
          </div>
        </div>

        <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
          <div className="mx-4 text-black text-2xl">
            <Link to="/">SIGN IN</Link>
          </div>

        </div>

        <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
          <div className="mx-4 text-black text-2xl">
            <Link to="/">CREATE ACCOUNT</Link>
          </div>

        </div>

        <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
          <div className="mx-4 text-black text-2xl">
            <Link to="/Films">FILMS</Link>
          </div>

        </div>

        <div className="flex h-full  items-center hover:bg-black hover:bg-opacity-50">
          <div className="mx-4 text-black text-2xl">
            <Link to="/reviews">REVIEWS</Link>
          </div>

        </div>
        <div className="flex h-full  items-center hover:bg-black hover:bg-opacity-50">
          <div className="mx-4 text-black text-2xl">
            <Link to="/">MAKE A LIST</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
    </div>
  );
};

export default Navbar;

