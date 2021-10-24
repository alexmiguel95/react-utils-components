import jwt_decode from 'jwt-decode';
import { User } from '../model/user';

const authUtils = () => {
    const getToken = () => {
        return localStorage.getItem('nameKeyInLocalStorage');
    };

    const getLoggedUser = () => {
        const token = getToken();
        let user: User = {};

        if (token != null) {
            user = jwt_decode(token);
        }

        return user;
    };

    return {
        getToken,
        getLoggedUser,
    };
};

export default authUtils;
