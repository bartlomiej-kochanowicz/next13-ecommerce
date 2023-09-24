import { type UrlObject } from "url";
import type { Route } from "next";

export const generatePath = <T extends string>(
	template: string,
	params: Record<string, string> = {},
): Route<T> | UrlObject => {
	let result = template;

	for (const [param, value] of Object.entries(params)) {
		result = result.replace(new RegExp(`\\[${param}\\]\\?{0,1}`, "g"), value);
	}

	result = result.replace(/\/\[.*?\]\?/g, "");

	const missingParams = (result.match(/\[(\w+)\]/g) || []).map((match) => match.slice(1, -1));
	const missingParam = missingParams.find((param) => !params[param]);

	if (missingParam) {
		throw new Error(`Missing parameter: ${missingParam}`);
	}

	return result as Route<T> | UrlObject;
};
