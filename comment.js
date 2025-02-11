// Create web server
// Create a new comment
app.post('/api/comment', (req, res) => {
    let comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: new Date()
    });
    comment.save((err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});