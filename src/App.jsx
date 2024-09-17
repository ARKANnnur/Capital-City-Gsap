import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./component/Navbar";
import Modal from "./component/Modal";
import Home from "./pages/Home";
import { city as cityData } from "../data/city";
import Welcome from "./pages/Welcome";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const [currentCity, setCurrentCity] = useState(null);
  const [modal, setModal] = useState(false);

  const container = useRef();

  function onModalOpen(modal) {
    setModal((isModal) => (isModal === modal ? false : modal));
  }

  function onClose() {
    setModal(false);
  }

  let city = cityData[currentCity ?? 0];

  useGSAP(
    () => {
      const bgTrigger = gsap.utils.toArray(".bg-trigger");
      const showScroll = gsap.utils.toArray(".showScroll");
      gsap.set(showScroll, {
        yPercent: 100,
      });

      bgTrigger.forEach((box, index) => {
        gsap.to(showScroll[index], {
          yPercent: 0,
          duration: 3,
          scrollTrigger: {
            start: "1% 0.5%",
            end: "1% 0.5%",
            trigger: box,
            scrub: 4,
            // markers: true,
            onEnter: () => {
              setCurrentCity(index);
              onClose();
            },
            onEnterBack: () => {
              setCurrentCity((index) => index - 1);
              onClose();
            },
          },
        });
      });
    },
    { dependencies: [], scope: container },
  );

  return (
    <div className="relative text-white" ref={container}>
      {cityData.map((city, i) => (
        <div key={city.country}>
          <Home city={city} modal={modal} index={i + 1} />
          <div className="bg-trigger z-0 h-dvh w-dvw bg-white">
            {i === 0 && <Welcome />}
          </div>
        </div>
      ))}
      <div className="h-10 w-10"></div>
      {currentCity ||
        (currentCity === 0 && (
          <Navbar modal={modal} onModalOpen={onModalOpen} />
        ))}
      {modal && <Modal onClose={onClose} city={city} modal={modal} />}
    </div>
  );
}

export default App;
