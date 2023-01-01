const key = 'babe284fd798a2fb5ec626a32b7335d6'

const requests ={
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,
    requestUpcomming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests