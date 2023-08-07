import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => {
      mm.add(
        "(min-width: 677px)", () => {
        gsap.utils.toArray(".section").forEach(item => {
          ScrollTrigger.create({
            trigger: item,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true
          })
        })
      })  
    })
    return () => ctx.revert()
    
  },[])

    // useLayoutEffect(() => {
  //   let mm = gsap.matchMedia();
  //   let ctx = gsap.context(() => {
  //     mm.add(
  //       "(min-width: 677px)", () => {
  //       gsap.utils.toArray(".section").forEach(item => {
  //         ScrollTrigger.create({
  //           trigger: item,
  //           start: "top top",
  //           pin: true,
  //           pinSpacing: false,
  //           scrub: true
  //         })
  //       })
  //     })  
  //   })
  //   return () => ctx.revert()
    
  // },[])

  return (
    <div id="page">
       <section className="section one" >
        <div className="container">
            <div className="column-left">
                <h1 className="text">Organic Diets</h1>
                <p className="text">
                    something
                </p>
                <button>Get started</button>
            </div>
            <div className="column-right">
                <img src="https://picsum.photos/1600/800?random=1" className="image" alt="pic1" />
            </div>
        </div>
    </section>
    
    <section className="section two" >
        <div className="container">
            <div className="column-left">
                <h1 className="text">Organic Diets</h1>
                <p className="text">
                    Try it
                </p>
                <button>Get started</button>
            </div>
            <div className="column-right">
                <img src="https://picsum.photos/1600/800?random=2" className="image" alt="pic2" />
            </div>
        </div>
    </section>

    <section className="section three" >
        <div className="container">
            <div className="column-left">
                <h1 className="text">Organic Diets</h1>
                <p className="text">
                    Try it now
                </p>
                <button>Get started</button>
            </div>
            <div className="column-right">
                <img src="https://picsum.photos/1600/800?random=3" className="image" alt="pic2" />
            </div>
        </div>
    </section>

    <section className="section four" >
        <div className="container">
            <div className="column-left">
                <h1 className="text">Organic Diets - Done</h1>
                <p className="text">
                    Try it now!
                </p>
                <button>Get started</button>
            </div>
            <div className="column-right">
                <img src="https://picsum.photos/1600/800?random=3" className="image" alt="pic2" />
            </div>
        </div>
    </section>
    </div>
  )
}


