import "../Button.css"

const Button = ({symbol, colour, handleClick}) => {
    return (
        <div 
        onClick={() => handleClick(symbol)}
        className="button-wrap" style={{backgroundColor: colour}}>
            {symbol}
        </div>
    )
};

export default Button