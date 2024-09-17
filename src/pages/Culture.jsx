/* eslint-disable react/prop-types */
function Culture({ city }) {
  console.log(city);
  return (
    <ul>
      {city.culture.map((data, i) => (
        <li key={i} className="my-5">
          <h2 className="text-2xl">
            {i + 1}. {data.title}
          </h2>
          <p key={i}>{data.article}</p>
        </li>
      ))}
    </ul>
  );
}

export default Culture;
