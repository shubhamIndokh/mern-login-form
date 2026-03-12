import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header) {
            return res.status(401).json({ message: "NO token provided" });
        }

        const token = header.split(" ")[1]; //header ko split karke uska bearer token wala part rakh liya 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();


    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
};
