export const shuffleArray = <T>(array: T[]): T[] => {
	const shuffledArray = [...array]; // Create a shallow copy of the original array
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
		// Swap shuffledArray[i] and shuffledArray[j]
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
};
