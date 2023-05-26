import './gameBoard.css';

const GameBoard = () => {
    const numbers = [...Array(41).keys()];

    return(
        <div className="gameBox">
            {numbers.map((e) => (
                <div key={e} className="numberBox">
                    {e}
                </div>
            ))}
        </div>
    )
}

export default GameBoard;