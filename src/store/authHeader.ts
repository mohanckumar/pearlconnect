import axios from "axios";
 
const api = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: '/api'
});
 
api.interceptors.request.use(
    function (config: any) {
        let token = window.sessionStorage.getItem(
            localStorage.getItem('accessTokenVariable')??""
        );
 
        if (token) {
            const oidcStorage = JSON.parse(token);
 
            if (!!oidcStorage && !!oidcStorage.access_token) {
                config.headers.Authorization = `Bearer ${oidcStorage.access_token}`;
            }
        }
 
        return config;
    },
    function (err:any) {
        return Promise.reject(err);
    }
);
 
export default api;