export const generateStaticPagination = (count: number, take: number, minPages: number = 3) => {
	const maxPage = Math.ceil(count / take);

	const length = Math.min(maxPage, minPages);

	const pages = Array.from({ length }, (_, i) => i + 1);

	return pages.map((page) => String(page));
};
