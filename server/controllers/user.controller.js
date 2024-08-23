export  const test = (req, res) => {
    res.json({message : "API is working!"})
}

export const signout = (req,res,next) => {
    try {
        res.clearCookie('access_taken')
        .status(200)
        .json('User has been signed out successfully');
    } catch (error) {
        next(error.message);
    }
}