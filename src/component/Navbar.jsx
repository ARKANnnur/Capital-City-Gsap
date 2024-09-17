// eslint-disable-next-line react/prop-types
function Navbar({ onModalOpen, modal }) {
  return (
    <nav className="fixed bottom-0 z-[9999] flex h-1/6 w-full items-end justify-center gap-5 tracking-widest">
      <ul
        onClick={() => onModalOpen("history")}
        className={`z-[9999] pb-2 text-white hover:cursor-pointer ${modal === "history" ? "rounded-t-3xl p-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]" : modal !== false && "text-opacity-30"}`}
      >
        <li>HISTORY</li>
      </ul>
      <ul
        onClick={() => onModalOpen("culture")}
        className={`z-[9999] pb-2 text-white hover:cursor-pointer ${modal === "culture" ? "rounded-t-3xl p-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]" : modal !== false && "text-opacity-30"}`}
      >
        <li>CULTURE</li>
      </ul>
      <ul
        onClick={() => onModalOpen("destination")}
        className={`z-[9999] pb-2 text-white hover:cursor-pointer ${modal === "destination" ? "rounded-t-3xl p-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]" : modal !== false && "text-opacity-30"}`}
      >
        <li>DESTINATION</li>
      </ul>
    </nav>
  );
}

export default Navbar;
