import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
const Home = () => {
  const initializeScore = (key, initialValue) => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, initialValue);
    }
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center m-8">
          <img src={Logo} alt="LOGO" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link to="/simplemode">
            <button
              onClick={() => {
                initializeScore("simpleModeScore", 0);
              }}
              className="w-40 bg-sky-500 hover:bg-sky-700 text-white font-mdBold font-bold py-2 px-4 rounded"
            >
              Simple Mode
            </button>
          </Link>
          <Link to="/advancedmode">
            <button
              onClick={() => {
                initializeScore("advancedModeScore", 0);
              }}
              className="w-40 bg-sky-500 hover:bg-sky-700 text-white font-mdBold font-bold py-2 px-4 rounded"
            >
              Advanced Mode
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
