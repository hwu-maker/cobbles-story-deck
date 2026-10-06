
const isNode = typeof window === 'undefined';

const isClearAccessTokenRequested = () =>
	!isNode && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	window.localStorage.removeItem('base44_access_token');
	window.localStorage.removeItem('token');
}

const getAccessToken = () => {
	if (isNode) return null;

	try {
		const urlParams = new URLSearchParams(window.location.search);
		const fromUrl = urlParams.get('access_token');
		if (fromUrl) {
			window.localStorage.setItem('base44_access_token', fromUrl);
			window.localStorage.setItem('token', fromUrl);
			urlParams.delete('access_token');
			const nextUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ''}${window.location.hash}`;
			window.history.replaceState({}, document.title, nextUrl);
			return fromUrl;
		}
	} catch (error) {
		console.error('Error retrieving token from URL:', error);
	}

	try {
		return window.localStorage.getItem('base44_access_token');
	} catch (error) {
		console.error('Error retrieving token from local storage:', error);
		return null;
	}
}

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: import.meta.env.VITE_BASE44_APP_ID,
		token: getAccessToken(),
		functionsVersion: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
		appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL,
	}
}

export const appParams = {
	...getAppParams()
}
