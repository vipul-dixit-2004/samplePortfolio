import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Name from './Name';
import gsap from 'gsap';
import { FlipWords } from "./ui/flip-words";
import { FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
const HeroSection = () => {
    const textFloat = useRef(null)
    const navLinks = useRef(null)
    const logoWrapper = useRef(null)
    const words = ["Artist", "Actor", "Model"];
    const [toogleNav,setToogleNav] = useState(false);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // all your GSAP animation code here
            gsap.from(navLinks.current, {
                duration: 1,
                x: 100,
                opacity: 0,
                ease: 'power2.inOut'
            })
            gsap.from(logoWrapper.current, {
                duration: 1,
                y: -100,
                opacity: 0,
                ease: 'power2.inOut'
            })
            gsap.from(textFloat.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
            })
        });
        return () => {
            ctx.revert()
        }
    }, [])

    const handleToogleBtn=()=>{
        setToogleNav(!toogleNav)
    }
    return (
        <main>
            <section className='h-screen w-screen sm:bg-[url("hero_back.jpg")] bg-[url("mobile_hero_bg.jpg")] bg-no-repeat bg-cover'>
                {/* navbar */}
                <div className='flex justify-around items-center text-white h-20 w-full bg-transparent p-4
                        absolute top-0 left-0 right-0'>
                    <div ref={logoWrapper} className='flex items-center '>
                        <img src="logo.jpg" alt="logo" className='w-12 h-12
                    object-cover object-center rounded-full'/>
                        <h1 className='text-3xl font-bold ml-4'>Rahul Kapoor</h1>
                    </div>
                    <nav ref={navLinks}>

                        <div className='flex sm:hidden items-center'>
                            <button className='bg-transparent border-0 text-white hover:text-gray-300
                        focus:outline-none focus:ring-2 focus:ring-gray-800'
                        onClick={handleToogleBtn}
                        >
                                < GiHamburgerMenu size={24} className={toogleNav?"hidden":"block"}/>
                                < CgCloseR size={24} className={toogleNav?"block":"hidden"}/>


                            </button>
                        </div>
                        <div className={`sm:flex items-center ${toogleNav?"block":"hidden"}`}>
                            <ul className='flex flex-col absolute sm:flex-row'>
                                <li className='sm:mr-4'>
                                    <a href='#' className='text-md sm:text-sm font-bold hover:text-gray-400'>Home</a>
                                </li>
                                <li className='sm:mr-4'>
                                    <a href='#about' className='text-md sm:text-sm font-bold hover:text-gray-400'>About</a>
                                </li>
                                <li className='sm:mr-4'>
                                    <a href='#works' className='text-md sm:text-sm font-bold hover:text-gray-400'>Works</a>
                                </li>
                                <li className='sm:mr-4'>
                                    <a href='#blogs' className='text-md sm:text-sm font-bold hover:text-gray-400'>Blogs</a>
                                </li>
                                <li className='sm:mr-4'>
                                    <a href='#contact' className='text-md sm:text-sm font-bold hover:text-gray-400'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-center items-end h-[80vh] w-screen'>
                    <div>
                        <h1 ref={textFloat} className='text-5xl font-bold text-white'>
                            I'm <FlipWords words={words} />
                        </h1>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default HeroSection;