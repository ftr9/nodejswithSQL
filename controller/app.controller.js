exports.getAllField = (req, res, connection) => {
    connection.query('select * from students order by name ', (err, results, fields) => {
        if (err) {
            console.log(err);
            console.log("error in the query");
        } else {
            res.send(results);
        }
    });
}

exports.insertStudents = (req, res, connection) => {
    connection.query(`insert into students(name) values("${req.body.name}");`, (err, result, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.status(201).json({
                status: 'success',
                result
            });
        }
    });
}

exports.deleteStudents = (req, res, connection) => {
    connection.query(`delete from students where name="${req.body.name}"`, (err, result, field) => {
        if (err) {
            res.send("something went wrong");
        } else {
            res.status(200).json({
                status: 'success',
                result
            })
        }
    })
}

exports.updateStudents = (req, res, connection) => {
    connection.query(`update students set name="${req.body.newname}" where name="${req.body.prevName}"`, (err, result, field) => {
        if (err) {
            res.send("something went wrong");
        } else {
            res.status(200).json({
                status: 'success',
                result
            })
        }
    })
}