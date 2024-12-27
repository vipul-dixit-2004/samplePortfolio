import React, { useLayoutEffect, useRef } from "react";
import { FlipWords } from "./ui/flip-words";
import gsap from "gsap";

function About() {
  const words = ["better", "cute", "beautiful", "modern"];
  const nameBox  = useRef(null)

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//         gsap.to(nameBox.current,{
//           duration:1,
//           ease:"power1.in",
//           color:"orange",
//           scale:1.1
//         })
//     });
//     return () => {
//         ctx.revert()
//     }
// }, [])


  return (
    (<section id="about" className="h-full w-screen text-slate-500 bg-black flex flex-col items-center justify-start pb-20">
        <div>
            <h1 ref={nameBox} className="text-4xl pt-[3rem] outline-yellow-300 transition-all hover:text-orange-500 font-bold font-sans uppercase">
              What I do..?
            </h1>
        </div>
        <div className="row w-full flex flex-col justify-center items-center pt-3 sm:flex-row-reverse sm:justify-center sm:items-center">
            <div className="col flex justify-center sm:justify-start items-center sm:w-1/2 p-3 h-auto">
                <img className="w-[20rem] rounded-full" src="/mobile_hero_bg.jpg" alt="" />
            </div>
            <div className="col flex flex-col items-center sm:w-1/2 p-3">
            <p className="sm:pl-60 sm:pr-5 pr-5 pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, vitae! Dolorem nulla ipsum, distinctio reprehenderit omnis veritatis ratione officia eaque provident porro quo deleniti, ab quis necessitatibus tempora, repudiandae modi?</p>
                
                <p className="sm:pl-60 sm:pr-5 pr-5 pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, vitae! Dolorem nulla ipsum, distinctio reprehenderit omnis veritatis ratione officia eaque provident porro quo deleniti, ab quis necessitatibus tempora, repudiandae modi?</p>
            </div>
        </div>
    </section>)
  );
}
export default About;