function Welcome() {
  return (
    <>
      <img
        src="/state.png"
        alt="all capital state"
        className="absolute h-dvh w-dvw object-fill object-center brightness-75"
        loading="lazy"
      />
      <div className="absolute flex h-dvh w-dvw flex-col flex-wrap items-center justify-center gap-5 p-5">
        <h1 className="text-left text-8xl lg:text-9xl">Capital City with</h1>
        <h1 className="text-right text-8xl lg:text-9xl">GSAP Scroll Effect</h1>
      </div>
    </>
  );
}

export default Welcome;
