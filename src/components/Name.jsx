import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Name = () => {
    const nameBoxRef = useRef(null);
    // Scroll event listener
    useEffect(() => {
        const nameBox = nameBoxRef.current;
        const tl = gsap.timeline();
        tl.from(nameBox, {
            duration: 1,
            y: 200,
            opacity: 0,
            scrollTrigger:{
                trigger
            }
            });
            return () => {
                tl.kill();
                };

    }, []);
    return (
        <>
        <div ref={nameBoxRef} className="text_wrapper">
            <h1 className="text-white text-4xl">
               Model
            </h1>
        </div>
        </>
    )
}

export default Name;
