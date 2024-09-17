import Weather from "../features/weather";

/* eslint-disable react/prop-types */
function Home({ modal, city, index }) {
  const { country, capitalCity, founded, shortStory } = city;

  return (
    <div className="showScroll fixed top-0 z-20 h-dvh w-dvw">
      <img
        src={`${index}.jpg`}
        className="absolute -z-10 h-dvh w-full bg-center object-cover brightness-75"
        loading="lazy"
      />
      <div className="z-10 h-full w-full">
        <div className="flex h-1/6 w-full justify-between p-5 text-xl tracking-widest">
          <div className="fadeIn z-10">
            <Weather location={city.capitalCity} />
          </div>
          <div className="fadeIn z-10">{country}</div>
        </div>
        <div className="flex h-4/6 w-full flex-col items-center justify-center">
          {!modal && (
            <>
              <h1
                className={`fadeIn z-10 ${capitalCity === "Kuala Lumpur" || capitalCity === "Bandar Seri Begawan" ? "tracking-wider sm:text-8xl" : "tracking-widest sm:text-9xl"} text-4xl font-semibold`}
              >
                {capitalCity}
              </h1>
              <p className="fadeIn z-10 text-base tracking-widest sm:text-4xl">
                Founded: {founded}
              </p>
              <p className="fadeIn z-10 w-full px-5 text-center text-sm tracking-widest sm:w-3/4 sm:px-0 sm:text-base lg:w-1/2">
                {shortStory}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
