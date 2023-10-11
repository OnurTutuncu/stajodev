import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fifaDataByYear } from "../data/clearFifaData";
import { FaArrowLeft } from "react-icons/fa";
import NavbarContext from "../context/NavbarContext";

const MatchPage = () => {
  const { year } = useParams();
  const matches = fifaDataByYear[year];
  const { countryName, setCountryName } = useContext(NavbarContext);
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 border border-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            {year} <br />
            Yılının Maçları{" "}
          </h2>
        </div>

        <Link to="/" className="text-white bg-gray-800 rounded-full p-3 hover:bg-gray-900 mb-4 inline-block">
          <FaArrowLeft />
        </Link>
        <ul className="space-y-4">
          {matches.map((match, index) => (
            <li key={match.keyId}>
              <div className="flex">
                <button
                  className={`flex-1 text-left ${
                    expanded === index ? "bg-gray-800" : "bg-gray-800"
                  } p-3 rounded-md cursor-pointer hover:bg-gray-900 transition`}
                  onClick={() => handleExpand(index)}
                >
                  <div className="text-white font-semibold text-center">
                    <span>{match.matchName}</span>
                    <br />
                    <span className="text-gray-400"> {match.score}</span> <br /> Maç Sonucu
                  </div>
                </button>
                {expanded === index && (
                  <div className="flex-1 bg-gray-900 p-3 ml-2 rounded-md text-center">
                    <p className="text-gray-400 font-semibold">
                      <span className="text-gray-200">Maç Tarihi</span>
                      <br /> {match.matchDate}
                    </p>
                    <p className="text-gray-400 font-semibold mt-1">
                      <span className="text-gray-200">Oynanıldığı Şehir</span> <br />
                      {match.cityName}
                    </p>
                    <p className="text-gray-400 font-semibold mt-1">
                      <span className="text-gray-200">Stadyum</span> <br /> {match.stadium}
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchPage;
