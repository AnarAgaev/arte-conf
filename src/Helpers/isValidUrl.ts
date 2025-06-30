export const isValidUrl = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch (e) {
		if (e instanceof TypeError) {
			console.log(`The string '${url}' is not a valid URL.`);
		}
		return false;
	}
}