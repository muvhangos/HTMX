// Handle POST request for contacts search
app.post('/search', async(req, res) => {
    const searchTerm = req.body.search.toLowerCase();
    if(!searchTerm) {
    return res.send('<tr></tr>');
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json()
   });
   