import { IoClose } from "react-icons/io5";
import History from "../pages/History";
import Culture from "../pages/Culture";
import Destination from "../pages/Destination";

/* eslint-disable react/prop-types */
function Modal({ modal, onClose, city }) {
  return (
    <div className="fixed bottom-0 z-50 flex h-dvh w-dvw items-end justify-center">
      <div className="relative flex h-5/6 w-3/4 overflow-hidden rounded-xl">
        <div className="absolute right-0 top-0 p-2">
          <IoClose
            onClick={onClose}
            className="h-10 w-10 hover:cursor-pointer"
          />
        </div>
        <div className="h-full border-l-[50px] border-t-[510px] border-transparent border-t-light-50 border-opacity-15" />
        <div className="h-full w-full rounded-b-2xl bg-light-50 bg-opacity-15 text-center font-merriweather text-white">
          <article className="mt-10 h-[80%] space-y-5 overflow-y-auto scrollbar-thin scrollbar-webkit">
            {modal === "history" && <History city={city} />}
            {modal === "culture" && <Culture city={city} />}
            {modal === "destination" && <Destination city={city} />}
          </article>
        </div>
        <div className="h-full border-r-[50px] border-t-[510px] border-transparent border-t-light-50 border-opacity-15" />
      </div>
    </div>
  );
}

export default Modal;
