import { FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center flex-wrap w-4/5 mx-auto">
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">
                <span className="italic">Big</span>
                <span className="text-green-500">Brother</span>
                <span className="text-amber-500 italic">Computers</span>
            </h1>
            <ul className="flex gap-4 font-medium  ">
                <li className="hover:underline">Home</li>
                <li className="hover:underline">Products</li>
                <li className="hover:underline">Categories</li>
                <li className="hover:underline">Contact us</li>
                <li className="hover:underline">Sign up</li>
            </ul>
            <form className="flex items-center p-2 bg-[#eff6ff] rounded-full ">
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-32 sm:w-40"/>
                <FaSearch className="text-slate-500"/>
            </form>
            <div className="flex items-center ">
                <div className="flex items-center gap-2">
                    <BsFillPersonFill />
                    <div>
                        <p className="text-xs text-slate-500">Welcome</p>
                        <p className="text-xs font-bold">Sign In / Register</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden ">
                <AiOutlineMenuUnfold />
            </div>
        </div>
    </header>
  )
}

export default Header