import { NavLink } from "react-router-dom";


const Navbar = () => {
const activeLink=({isActive})=>{
   return {
    color :isActive ? 'green':'red',
    textDecoration :isActive ? 'underline':''
   }
}

    return (
        <div>
            <ul className="flex justify-center gap-8 text-[28px]">
                <NavLink style={activeLink} to='/'>Home</NavLink>
                <NavLink style={activeLink} to='about'>About</NavLink>
                <NavLink style={activeLink} to='contact'>Contact</NavLink>
              
              
            </ul>
        </div>
    );
};

export default Navbar;