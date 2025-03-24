// Set-ExecutionPolicy Unrestricted -Scope Process
import express from 'express';
const app = express();

// Set static folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Handle POST request for contacts search
app.post('/search', async (req, res) => {
    // Get the search term from the request body and convert it to lowercase for case-insensitive
    const searchTerm = req.body.search.toLowerCase();

    // If no search term is provided, return an empty row (indicating no results)
    if (!searchTerm) {
        return res.send('<tr></tr>');
    }
    // Fetch the list of users from an external API (JSONPlaceholder in this case)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // Parse the response body to JSON to extract user data
    const users = await response.json()

    // Filter the users array based on the search term, matching either the name or email 
    const searchResults = users.filter((user) => {
        // Convert the user's name and email to lowercase
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();
        // Check if the search term is included in either the name or email
        return name.includes(searchTerm) || email.includes(searchTerm)
    })

    // Convert the filtered results into HTML rows to send back to the client
    const searchResultHtml = searchResults
        .map((user) => `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>
        `)
        .join(''); // Join the array of rows into a single string

    // Send the generated HTML as the response, which will be inserted into the search results table
    res.send(searchResultHtml);
});


// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
