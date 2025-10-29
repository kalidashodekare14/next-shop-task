"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const pathname = usePathname()
    const [isSticky, setIsSticky] = useState<boolean>(false)

    const navigation = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
    
    ]

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className={` ${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] dark:bg-[#0d1b2aab]  shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white dark:bg-[#0d1b2a]"}`}>
            <nav className={`z-50 w-full lg:px-32 px-3 flex justify-between py-3 font-truculenta `}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl dark:text-[#cfcfcf]'>NextShop</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] '>
                        {
                            navigation.map((navi) => (
                                <Link key={navi.id} className={`${pathname == navi.path ? "text-[#e76f51] dark:text-[#e76f51] border-b-2 border-[#e76f51]" : "dark:text-[#cfcfcf]"} hover:text-[#e76f51]`} href={navi.path}>
                                    <li className='font-truculenta'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>

                    <FaBars onClick={handleToggle} className='lg:hidden' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#e76f51ea] backdrop-blur-sm text-white w-full flex flex-col  gap-5 text-[19px] translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navigation.map((navi) => (
                            <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#307bc4]`} key={navi.id} href={navi.path}>
                                <li className='font-truculenta'>{navi.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;