const API = "https://api.themoviedb.org/3"

export function get(url){
    return fetch(API + url, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRiZWFkMWM5MjJhYTA4NmFlOTZlMGI1Mzc2ZDdlYyIsInN1YiI6IjYwY2I1MWVjMjQ3NmYyMDA3OThmMjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RTcRcjh4RSgkjD0EDzIO89Rdgyi3hSN8rTId8bKZWIY",
                "Content-Type": "application/json;charset=utf-8"
            }
        })
        .then(response =>response.json())
}