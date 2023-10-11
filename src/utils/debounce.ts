/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): T => {
	let timer: NodeJS.Timeout;

	return function (this: any, ...args: any[]): void {
		const context = this;

		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	} as T;
};
