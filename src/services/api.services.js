import { requestHelpers } from '../helpers';

const getProtected = async (user) => {
    if (user) {
        const reqOpts = {
            headers: requestHelpers.getHeaders(user),
        }
        console.log("FETCHING getProtected", reqOpts);
        return fetch('/auth/protected', reqOpts);
    }

}


export {
    getProtected,
}