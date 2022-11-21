import posts from "./tuits.js";
let tuits = posts;



export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findTuits = (req, res) =>
    res.json(tuits);

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.topic = "Node JS Assignment"
    newTuit.username = "Vineet Alampally";
    newTuit.handle = "@vineetalampally";
    newTuit.title = "Node JS";
    newTuit.time = "Just now";
    newTuit.image =
        "https://images.g2crowd.com/uploads/product/image/"
        + "large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png";
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
                             t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
