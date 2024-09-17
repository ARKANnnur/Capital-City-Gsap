/* eslint-disable react/prop-types */
function History({ city }) {
  return (
    <div>
      <h2 className="text-2xl mb-5">History of {city.capitalCity}</h2>
      <h2 className="text-base">{city.history}</h2>
    </div>
  );
}

export default History;
