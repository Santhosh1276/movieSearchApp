const API = "http://www.omdbapi.com/?i=tt3896198&apikey=e11434d0"
console.log("api >>>",API)
// const API_KEY = "e11434d0"

export async function getMovies() {
    let response = await fetch(`${API}&s=Avengers`, {
        method: "GET",
    })

    let task = await response?.json()
    return task
}
