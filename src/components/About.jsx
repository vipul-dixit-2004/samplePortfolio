import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const nameBox = useRef(null); 
  const aboutImg = useRef(null);
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.to(
        nameBox.current,
        { 
          color: " #f97316", 
          scrollTrigger: {
            trigger: nameBox.current,  
            start: "top 50%",          
            end: "top 30%",           
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    gsap.fromTo(aboutImg.current,
      {scale:0.8},
      {
        scale:1.1,
        scrollTrigger:{
          trigger:aboutImg.current,
          start:"top 50%",
          end: "top 50%",  
          toggleActions:"play none none reverse",

        }
      }
    )

    return () => {
      ctx.revert();
    };
  }, []); 

  return (
    <section id="about" className="h-full w-screen text-slate-500 bg-black flex flex-col items-center justify-start pb-20">
      <div>
        <h1 
          ref={nameBox} 
          className="text-4xl pt-[3rem] transition-all hover:text-orange-500 font-bold font-sans uppercase"
        >
          What I do..?
        </h1>
      </div>
      
      <div className="row w-full flex flex-col justify-center items-center pt-3 sm:flex-row-reverse sm:justify-center sm:items-center">
        <div className="col flex justify-center sm:justify-start items-center sm:w-1/2 p-3 h-auto">
          <div className="w-[20rem] overflow-clip rounded-full">
          <img ref={aboutImg} className="w-[20rem] rounded-3xl" src="/mobile_hero_bg.jpg" alt="Hero" />

          </div>
        </div>
        
        <div className="col flex flex-col items-center sm:w-1/2 p-3">
          <p className="sm:pl-60 sm:pr-5 pr-5 pl-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, vitae! Dolorem nulla ipsum, distinctio reprehenderit omnis veritatis ratione officia eaque provident porro quo deleniti, ab quis necessitatibus tempora, repudiandae modi?
          </p>
          <p className="sm:pl-60 sm:pr-5 pr-5 pl-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, vitae! Dolorem nulla ipsum, distinctio reprehenderit omnis veritatis ratione officia eaque provident porro quo deleniti, ab quis necessitatibus tempora, repudiandae modi?
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
