const { app } = require('./app');


const PORT = process.env.PORT || 3040;
app.listen(3040, () => {
    console.log(`server has been started on PORT ${PORT}`);
})
