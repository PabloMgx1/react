const API = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdkZTQzNzIzM2YzZDRmYTk1OGY0Zjk3YjE0YjA0YyIsInN1YiI6IjYxY2M5ZDNiMzg1MjAyMDA2MGU5MjA0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtLiY8H2M203jRkFCQRqcZetkfvFrgxQAH-pGi0augY",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(result => result.json());
}