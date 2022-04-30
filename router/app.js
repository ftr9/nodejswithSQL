const fn = (func, connection) => {
    return (req, res) => {
        func(req, res, connection);
    }

}

////controller
const { getAllField, insertStudents, deleteStudents, updateStudents } = require('../controller/app.controller');

////app query
module.exports = (connection, app) => {
    app.get("/", fn(getAllField, connection));
    app.post("/", fn(insertStudents, connection));
    app.delete("/", fn(deleteStudents, connection));
    app.patch('/', fn(updateStudents, connection));
}
