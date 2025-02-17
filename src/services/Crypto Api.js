const BASE_URL="https://api.coingecko.com/api/v3"
const BASE_KEY="CG-N1BqRy2p7uRnMycPRFXEbdDZ"

const getcoinlist=(page) =>{
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${BASE_KEY}`
}

export {getcoinlist}