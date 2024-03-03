import StemmingResult from "./StemmingResult";
import TokenizingResult from "./TokenizingResult"

const TokenIndex = ({data}) => {
    return(
        <>
            {typeof data[0].token_stemming === 'undefined' && <TokenizingResult data={data} />}
            {typeof data[0].token_stemming !== 'undefined' && <StemmingResult data={data} />}
        </>
    )
}

export default TokenIndex;