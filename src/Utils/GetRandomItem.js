const getRandomHouseItem = () => {
    const items = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};

export default getRandomHouseItem