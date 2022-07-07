import customHistory from './history';
import LocalStorageService from './LocalStorageService';
const axios = require('axios');

const localStorageService = LocalStorageService.getService();

const axiosInstance = axios.create({
	baseURL: '/api',
	timeout: 5000,
});


// apply token to every request
axiosInstance.interceptors.request.use(
	(config: { headers: { [x: string]: string; }; }) => {
		const token = localStorageService.getAccessToken();
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		// config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error: any) => {
		console.log(error)
	});

/* axiosInstance.interceptors.response.use((response) => {
		return response
	  }, async function (error) {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			console.log("token expired");
			localStorageService.clearToken();
			customHistory.push('/login');
		}
		console.log(error);
	  });

// handle refresh token
/*
axiosInstance.interceptors.response.use((response: any) => {
	return response
}, async function (error: { config: any; response: { status: number; }; }) {
	const originalRequest = error.config;
	if (error.response.status === 403 && !originalRequest._retry) {
		originalRequest._retry = true;
		const access_token = await refreshAccessToken();
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
		return axiosApiInstance(originalRequest);
	}
	return Promise.reject(error);
});*/

export default axiosInstance;