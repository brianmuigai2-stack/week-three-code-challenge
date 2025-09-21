const APIURL ="http://localhost:3000/films"
fetch (APIURL)
.then(res => res.json())
.then((data)=> {
    renderMOvies(data);
    if(data.length > 0){
        showMovieDetails(data[0]);
    }
})
.catch((error) => {
    console.error("Error fetching data:", error);
});

function renderMOvies(movies){
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    movies.forEach((movie) => {
        const li =document.createElement("div");
        li.textContent = movie.title;

       li.addEventListener("click", () => {
        showMovieDetails(movie);
       });

       movieList.appendChild(li);
    });
}

function showMovieDetails(movie){
    const title = document.getElementById("title");
    const poster = document.getElementById("poster");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const availableTickets = document.getElementById("availableTickets");
    const buyTicketButton = document.getElementById("buyTicket");

    title.textContent = movie.title;
    poster.src = movie.poster;
    runtime.textContent = `Runtime: ${movie.runtime} minutes`;
    showtime.textContent = `Showtime: ${movie.showtime}`;

    let remaining = movie.capacity - movie.tickets_sold;
    availableTickets.textContent = `Available Tickets: ${remaining}`;
    description.textContent = movie.description;

    buyTicketButton.textContent = remaining > 0 ? "Buy Ticket" : "Sold Out";
    buyTicketButton.disabled = remaining === 0;
    buyTicketButton.onclick = () => {
        if (remaining > 0) {
            movie.tickets_sold += 1;
            remaining -= 1;
            availableTickets.textContent = `Available Tickets: ${remaining}`;
            if (remaining === 0) {
                buyTicketButton.textContent = "Sold Out";
                buyTicketButton.disabled = true;
            }
        }
    };
buyTicketButton.appendChild(buyTicketButton);

}

fetch(`${APIURL}/${movie.id}`, {
    method: "PATCH",
    body: JSON.stringify({
        tickets_sold: movie.tickets_sold + 1
    })
    // Request Headers: {
    //     "Content-Type": "application/json"
    // }
})  
    .then(res => res.json())
    .then((updatedMovie) => {
        movie.tickets_sold = updatedMovie.tickets_sold;
        showMovieDetails(movie);
    })
    .catch((error) => {
        console.error("Error updating ticket sales:", error);
    })  
.then((res) => res.json())
.then((updatedMovie) => {
    movie.tickets_sold = updatedMovie.tickets_sold;

})