import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { fifaDataByYear } from "../data/clearFifaData";
import FifaImg from "../assets/worldcup.png";
import NavbarContext from "../context/NavbarContext";

const Home = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const { countryName, setCountryName } = useContext(NavbarContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-900">
      {Object.keys(fifaDataByYear).map((year) => (
        <Link
          to={`/matches/${year}`}
          key={year}
          className="bg-black text-white p-4 rounded-lg hover:bg-gray-800 cursor-pointer transition"
          onClick={() => setSelectedYear(year)}
        >
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-2">FIFA {year} Dünya Kupası</h3>
            <img src={FifaImg} alt="FIFA Image" className="w-full h-auto mt-2 rounded-lg" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
