import { useDebugValue } from "react"

const BASE_URL="https://api.coingecko.com/api/v3"
const BASE_KEY="CG-N1BqRy2p7uRnMycPRFXEbdDZ"

const getcoinlist=(page ,currency) =>
     `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${BASE_KEY}`


const searchcoin=(query)=>`${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${BASE_KEY}`


export {getcoinlist , searchcoin}