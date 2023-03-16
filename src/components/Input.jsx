import "../Input.css"

const Input = ({calculation, result}) => {
    return (
        <div className="input-wrap"> 
        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className="text">
            <h1>{calculation}</h1>
        </div>
        </div>
    )
};

export default Input