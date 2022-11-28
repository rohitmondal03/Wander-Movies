$(document).ready(() => {
    $('.search-input').on('submit', e => {
        let text = $('.form-control').val();
        getMovies(text);
        e.preventDefault();
    })

    // js for typing effect, shopuld be attached with .ready() function
    var typed = new Typed('#typed-element', {
        strings: ["you love.", "you like...."],
        smartBackspace: false,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 500
    });
    
})

$('.btn').click(() => {
    //    console.log('1');
    var text = $('.form-control').val();
    getMovies(text);
    $('.form-control').val("");
})

function getMovies(text) {
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=5fbada63&s=' + text)
        .then((response) => {
            // console.log(response)
            let movies = response.data.Search;
            console.log(movies);
            // console.log(movies.length());
            let output = '';

            $.each(movies, (index, movie) => {
                output += `
                    <div id="output-card" class="col-md-3 col-sm-6 text-center">
                        <img src="${movie.Poster}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h3 class="card-title">'${movie.Title}'</h3>
                            <p> Year released: '${movie.Year}' </p>
                            <p> Type: '${movie.Type}' </p>
                            <a target="_blank" href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary">Show on IMDb</a>
                        </div>
                    </div>
                `
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });


}


// function movieSelected(id) {
//     sessionStorage.setItem('movieId', id);
//     window.location = 'movie.html';
//     return false;
// }

// function getMovie() {
//     let movieId = sessionStorage.getItem('movieId');

//     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5fbada63&i=' + movieId)
//         .then((response) => {
//             // console.log(response)
//             let movie = response.data;
//             // console.log(movies);
//             // console.log(movies.length());

//             let output = `
//                 <div id="card" class="col-md-3 col-sm-6 text-center">
//                     <img src="${movie.Poster}" class="card-img-top" alt="img">
//                     <div class="card-body">
//                         <h5 class="card-title">'${movie.Title}'</h5>
//                         <p> Year released: '${movie.Year}' </p>
//                         <p> Year released: '${movie.Year}' </p>
//                         <p> Type: '${movie.Type}' </p>
//                     </div>
//                 </div>
//             `

//             $('#movies').html(output);
//         })
//         .catch((err) => {
//             console.log(err);
//         });

// }


