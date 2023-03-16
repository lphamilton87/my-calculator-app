import "../Button.css"

const Button = ({symbol, colour}) => {
    return (
        <div className="button-wrap" style={{backgroundColor: colour}}>
            {symbol}
        </div>
    )
};

export default Button