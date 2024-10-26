import { useState } from "react";
import { BsCoin } from "react-icons/bs";
const Header = () => {

    const [count, setCount] = useState(0);

    const handleAdd = () =>{
      const newCount = count +600000;
      setCount(newCount)
    }

    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl"><img src="assets/logo.png" alt="Cricket logo" /></a>
  </div>
 
  <div className="navbar-end mt-4 gap-4">
  <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <a className="btn"> {count} Coin <BsCoin size={20} /> </a>
  </div>
</div>

        <div className="mt-10 w-full bg-black p-10 bg-[url('assets/bg-shadow.png')] bg-cover bg-center  ">
    
            <div className="flex flex-col justify-center text-center gap-4">
            <img className="w-1/3 self-center" src="assets/banner-main.png" alt="" />
            <h2 className="text-white font-bold text-4xl" >Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-gray-400">Beyond Boundaries Beyond limit</p>
            <button onClick={handleAdd} className=" bg-[#E7FE29] w-40 mx-auto rounded-xl h-10 text-black font-bold">Claim Free Credit</button>
            </div>
        </div>

        

        </div>


    );
};

export default Header;