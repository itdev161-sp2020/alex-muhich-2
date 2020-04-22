import jwt from 'jsonwebtoken';
import config from 'config';

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    const secret = config.get('jwtSecret');

    if(!token){
        return res
            .status(401)
            .json({message: 'Missing auth token. Auth failed.' });
    }
    try{
        const decodedToken = jwt.verify(token, secret);
        req.user = decodedToken.user;
        next();
    }catch(error){
        res
            .status(401)
            .json({message: 'Invalid auth token. Auth failed.'});
    }
};

export default auth;