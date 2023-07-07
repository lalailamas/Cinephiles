
import { Outlet, Link } from "react-router-dom";

const Navbar= () => {
  return <div>
     <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/films">Films</Link>
           </li>
           <li>
             <Link to="/reviews">Review Film</Link>
           </li>
         </ul>
     </nav>
     <hr />
     <Outlet />
  </div>;
 }
 
 export default Navbar;