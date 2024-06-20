import getRandomHouseItem from "./GetRandomItem";

const CheckWin = (item, setHouseItem, score, setScore, setIsWinner) => {
    const houseItem = getRandomHouseItem();
    setHouseItem(houseItem);
    

    if (item === "scissors") {
        if (houseItem === "rock") {
            setScore(score - 1);
            localStorage.setItem("simpleModeScore", (score - 1));
        } else if (houseItem === "paper") {
            setScore(score + 1);
            localStorage.setItem("simpleModeScore", (score + 1));
            setIsWinner("win");
        }
    }
    if (item === "paper") {
        if (houseItem === "scissors") {
            setScore(score - 1);
            localStorage.setItem("simpleModeScore", (score - 1));
        } else if (houseItem === "rock") {
            setScore(score + 1);
            localStorage.setItem("simpleModeScore", (score + 1));
            setIsWinner("win");
        }
    }
    if (item === "rock") {
        if (houseItem === "paper") {
            setScore(score - 1);
            localStorage.setItem("simpleModeScore", (score - 1));
        } else if (houseItem === "scissors") {
            setScore(score + 1);
            localStorage.setItem("simpleModeScore", (score + 1));
            setIsWinner("win");
        }
    }

    if (item === houseItem) {
        setScore(score);
        localStorage.setItem("simpleModeScore", (score));
        setIsWinner("tie");
    }

};

export default CheckWin;
