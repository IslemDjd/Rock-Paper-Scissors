/* eslint-disable no-unused-vars */
import Logo from "../../assets/logo.svg";
import triangle from "../../assets/bg-triangle.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import rules from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";
import PopUp from "../../Components/PopUp/PopUp";
import { useState } from "react";
import CheckWin from "../../Utils/CheckWin";
import PlayAgain from "../../Utils/PlayAgain";

const SimpleMode = () => {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(
    () => Number(localStorage.getItem("simpleModeScore")) || 0
  );
  const [item, setItem] = useState("");
  const [houseItem, setHouseItem] = useState("");
  const [isWinner, setIsWinner] = useState("lose");

  const handleItem = (item) => {
    setItem(item);
    setTimeout(() => {
      CheckWin(item, setHouseItem, score, setScore, setIsWinner);
    }, 0);
  };

  return (
    <div className="bg-Background min-h-screen flex flex-col border-[1px] border-transparent">
      {/* Header(Score) */}
      <div className="flex justify-between items-center border-2 border-gray-500 rounded-md sm:w-[60%] w-11/12 mx-auto mt-10 p-5">
        <img src={Logo} className="w-24" alt="Logo" />
        <div className="w-20 h-20 rounded-md bg-white flex flex-col justify-center items-center">
          <span className="font-mdBold font-bold text-sky-700 text-xs">
            SCORE
          </span>
          <span className="font-outfit font-bold text-gray-600 text-3xl">
            {score}
          </span>
        </div>
      </div>

      {/* Game Body */}
      {item === "" ? (
        <div className="relative flex justify-center items-center w-fit max-h-64 mx-auto mt-32 flex-grow">
          <img src={triangle} className="w-64 h-56" alt="Triangle" />
          <div
            onClick={() => {
              handleItem("scissors");
            }}
            className="flex hover:cursor-pointer inner-shadow1 justify-center items-center w-32 h-32 rounded-full bg-scissors absolute -top-14 -right-14"
          >
            <div className="bg-white inner-shadow2 rounded-full flex justify-center items-center w-24 h-24">
              <img src={scissors} alt="scissors" />
            </div>
          </div>
          <div
            onClick={() => {
              handleItem("paper");
            }}
            className="flex hover:cursor-pointer inner-shadow1 justify-center items-center w-32 h-32 rounded-full bg-paper absolute -top-14 -left-14"
          >
            <div className="bg-white inner-shadow2 rounded-full flex justify-center items-center w-24 h-24">
              <img src={paper} alt="paper" />
            </div>
          </div>
          <div
            onClick={() => {
              handleItem("rock");
            }}
            className="flex hover:cursor-pointer inner-shadow1 justify-center items-center w-32 h-32 rounded-full bg-rock absolute -bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-white inner-shadow2 rounded-full flex justify-center items-center w-24 h-24">
              <img src={rock} alt="rock" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex bg-transparent gap-10 w-11/12 mx-auto mt-16 justify-center items-center">
            <div className="flex justify-center items-center flex-col mb-8 sm:mb-0">
              <h1 className="font-kanit font-bold mb-4 tracking-widest text-center text-white">
                YOU PICKED
              </h1>
              <div
                className={`flex hover:cursor-pointer inner-shadow1 justify-center items-center w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-${item}`}
              >
                <div className="bg-white inner-shadow2 rounded-full flex justify-center items-center w-24 h-24 sm:w-44 sm:h-44">
                  <img
                    className="sm:w-20"
                    src={
                      item === "scissors"
                        ? scissors
                        : item === "paper"
                        ? paper
                        : rock
                    }
                    alt={item}
                  />
                </div>
              </div>
            </div>

            {/* Result and Play Again Button on Mobile */}
            <div className="hidden sm:flex flex-col justify-center items-center  mb-8">
              <h1
                className={`${
                  isWinner === "win"
                    ? "text-green-600"
                    : isWinner === "lose"
                    ? "text-red-500"
                    : "text-white"
                } font-mdBold font-extrabold mb-4 text-4xl tracking-wider text-center `}
              >
                {isWinner === "win"
                  ? "YOU WIN"
                  : isWinner === "lose"
                  ? "YOU LOSE"
                  : "DRAW"}
              </h1>
              <button
                onClick={() => {
                  PlayAgain(setScore, setItem, setHouseItem, setIsWinner);
                }}
                className="bg-white border-[1px] font-bold font-mdBold tracking-wider border-white rounded-md px-6 py-1 w-fit"
              >
                PLAY AGAIN
              </button>
            </div>

            <div className="flex justify-center items-center flex-col mb-8 sm:mb-0">
              <h1 className="font-kanit font-bold mb-4 tracking-widest text-center text-white">
                THE HOUSE PICKED
              </h1>
              <div
                className={`${
                  houseItem !== "" && "inner-shadow1"
                } flex hover:cursor-pointer justify-center items-center w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-${houseItem} bg-black/20`}
              >
                {houseItem !== "" && (
                  <div className="bg-white inner-shadow2 rounded-full flex justify-center items-center w-24 h-24 sm:w-44 sm:h-44">
                    <img
                      className="sm:w-20"
                      src={
                        houseItem === "scissors"
                          ? scissors
                          : houseItem === "paper"
                          ? paper
                          : rock
                      }
                      alt={houseItem}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Result and Play Again Button on Larger Screens */}
          <div className="sm:hidden flex flex-col justify-center items-center w-11/12 mx-auto mt-16">
            <h1
              className={`${
                isWinner === "win"
                  ? "text-green-600"
                  : isWinner === "lose"
                  ? "text-red-500"
                  : "text-white"
              } font-mdBold font-extrabold mb-4 text-4xl tracking-wider text-center `}
            >
              {isWinner === "win"
                ? "YOU WIN"
                : isWinner === "lose"
                ? "YOU LOSE"
                : "DRAW"}
            </h1>
            <button
              onClick={() => {
                PlayAgain(setScore, setItem, setHouseItem, setIsWinner);
              }}
              className="bg-white border-[1px] font-bold font-mdBold tracking-wider border-white rounded-md px-6 py-1 w-fit"
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      )}

      {/* Rules Section */}
      <div className="flex justify-end items-center w-11/12 mt-40 sm:mt-24 mb-16">
        <h1
          className="font-mdSemi hover:cursor-pointer hover:bg-gray-100/10 text-white border-[1px] rounded-md px-6 py-1 w-fit border-white"
          onClick={() => setOpen(true)}
        >
          Rules
        </h1>
      </div>
      <PopUp open={open} setOpen={setOpen}>
        <div className="relative flex justify-center items-center py-10">
          <img src={rules} alt="Rules" />
          <img
            src={close}
            alt="Close"
            className="absolute top-4 right-4 hover:cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      </PopUp>
    </div>
  );
};

export default SimpleMode;
