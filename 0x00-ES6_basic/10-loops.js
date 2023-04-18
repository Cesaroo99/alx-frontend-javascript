export default function appendToEachArrayValue(array, appendString) {
	const a = [];
	for (const idx of array) {
		const value = idx;
		a.push(appendString + value);
	}

	return a;
}
