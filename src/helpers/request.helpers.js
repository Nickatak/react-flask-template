
const handleResponse = (response) => {

    return response.text()
    .then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401 || response.status === 400) {
                localStorage.removeItem('user');
                // window.location.reload(true);
            }

            const error = data || response.statusText;
            return Promise.reject(error);
        }

        // If everything is fine.
        return data;
    });
}

export {
    handleResponse,
}