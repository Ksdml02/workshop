document.addEventListener('DOMContentLoaded', function () {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');

    jokeBtn.addEventListener('click', function () {
        // Fetching a random joke from JokeAPI
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Check if the joke is a single joke or a two-part joke
                if (data.type === 'single') {
                    jokeDisplay.textContent = data.joke;
                } else {
                    jokeDisplay.textContent = `${data.setup} ::::: ${data.delivery}`;
                }
            })
            .catch(error => {
                // Handling errors
                jokeDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching joke:', error);
            });
    });
});