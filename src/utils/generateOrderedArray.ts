export const generateOrderedArray = (page: number, maxPage: number): number[] => {
	const result: number[] = [];

	const startingNumber = page - 2 < 1 ? 1 : page - 2;
	const endingNumber = page + 2 > maxPage ? maxPage : page + 2;

	for (let i = startingNumber; i <= endingNumber; i++) {
		result.push(i);
	}

	return result;
};
