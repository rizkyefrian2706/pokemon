import Links from 'next/link';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import { useSelector } from 'react-redux';
import { connect } from "react-redux";

const Navbar = (props) => {
    console.log("props",props);
    const [isOpen, setIsOpen] = useState(false);

    // const cart = useSelector((state) => state.cart);

    const getItemsCount = () => {
        // return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
        return "0";
    };

    return (
        <div>
            <nav className=" shadow-sm fixed w-full z-10">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <Links href="/">
                                    <a>
                                        <Image src="/pkm.png" width={150} height={77} />
                                    </a>
                                </Links>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Links href="/" className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"><a>Home</a></Links>
                                    <Links href="/about" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"><a>About</a></Links>

                                    <Links href="/listpokemon" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"><a>List</a></Links>
                                    <Links href="/shop" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"><a>Shop</a></Links>
                                    <Links href="/cart" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        <p>Cart {props.order}</p>
                                    </Links>
                                    <Links href="/crud" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"><a>Belajat CRUD</a></Links>

                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >

                                <Link
                                    href="/listpokemon"
                                    activeClass="Home"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <Links href="/"><a>Home</a></Links>
                                </Link>
                                <Link
                                    activeClass="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <Links href="/about"><a>About</a></Links>
                                </Link>

                                <Link
                                    activeClass="listpokemon"
                                    to="listpokemon"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <Links href="/listpokemon"><a>List</a></Links>
                                </Link>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}



const mapStateToProps = state => {
    console.log("state bavbar", state);
    return {
      order: state.main.totalOrder
    }
  }

  export default connect(mapStateToProps)(Navbar); 
// export default Navbar;