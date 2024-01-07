class Movie {
    // a) Constructor for the class Movie
    constructor(title, studio, rating = "PG") // b)PG is given as default value
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // c) Method to filter movies with a rating of "PG"
    static getPG(movies) {
        const pgMovies = [];

        for (const movie of movies) {
            if (movie.rating === "PG") {
                pgMovies.push(movie);
            }
        }

        return pgMovies;
    }
}

// d) Creating an instance of the class Movie

const  casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Logging the casinoroyale

console.log(casinoRoyale)
