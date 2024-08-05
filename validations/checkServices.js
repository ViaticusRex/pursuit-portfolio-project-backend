const checkName = (req,res,next) => {
    const { name } = req.body
    if (name) {
        next()
    } else {
        res.status(400).json({ error: "Name is required" })
    }
}

const checkPrice = (req, res, next) => {
    const { price } = req.body;
    if (price > 0) {
        next();
    } else {
        res.status(400).json({ error: "Price must be greater than 0"})
    }
}

const checkDuration = (req, res, next) => {
    const { duration_minutes } = req.body;
    if (duration_minutes < 5) {
        res.status(400).json({ error: "Duration must be at least 5 minutes"})
    } else {
        next();
    }
}


module.exports = {
    checkName,
    checkPrice,
    checkDuration
}