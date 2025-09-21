const APIURL = "http://localhost:3000/films";

fetch(APIURL)
  .then(res => res.json())
  .then(data => {
    renderMovies(data); // ✅ fixed typo
    if (data.length > 0) {
      showMovieDetails(data[0]);
    }
  })
  .catch(error => console.error("Error fetching data:", error));

function renderMovies(movies) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.textContent = movie.title;

    div.addEventListener("click", () => {
      showMovieDetails(movie);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteMovie(movie.id, div);
    };

    // styles
    delBtn.style.color = "white";
    delBtn.style.border = "1px solid white";
    delBtn.style.padding = "0.5rem 1rem";
    delBtn.style.cursor = "pointer";
    delBtn.style.backgroundColor = "blue";

    div.append(delBtn);
    movieList.append(div);
  });
}

function showMovieDetails(movie) {
  const title = document.getElementById("title");
  const poster = document.getElementById("poster");
  const runtime = document.getElementById("runtime");
  const showtime = document.getElementById("showtime");
  const availableTickets = document.getElementById("availableTickets");
  const description = document.getElementById("description");
  const buyTicketButton = document.getElementById("buyTicket");

  title.textContent = movie.title;
  poster.src = movie.poster;
  runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  description.textContent = movie.description;

  updateTickets(movie);

  buyTicketButton.onclick = (e) => {
    e.preventDefault();
    buyTicket(movie);
}
  }
     

function updateTickets(movie) {
  const availableTickets = document.getElementById("availableTickets");
  const buyTicketButton = document.getElementById("buyTicket");

  let remaining = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = `Available Tickets: ${remaining}`;

  buyTicketButton.textContent = remaining > 0 ? "Buy Ticket" : "Sold Out";
  buyTicketButton.disabled = remaining === 0;
}

function buyTicket(movie) {
  if (movie.tickets_sold < movie.capacity) {
    fetch(`${APIURL}/${movie.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tickets_sold: movie.tickets_sold + 1 }) // ✅ safer
    })
      .then(res => res.json())
      .then(updatedMovie => {
        movie.tickets_sold = updatedMovie.tickets_sold;
        updateTickets(movie);
      })
      .catch(error => console.error("Error updating ticket sales:", error));
  }
}

function deleteMovie(id, element) {
  fetch(`${APIURL}/${id}`, { method: "DELETE" })
    .then(() => element.remove())
    .catch(error => console.error("Error deleting movie:", error));
}
