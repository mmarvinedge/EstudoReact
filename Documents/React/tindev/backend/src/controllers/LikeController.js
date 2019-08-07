const Dev = require('./DevController');

module.exports = {
    store(req, res) {
        console.log(req.params.devID);
        console.log(req.headers.user);
        return res.json({ ok: true});
    }
}