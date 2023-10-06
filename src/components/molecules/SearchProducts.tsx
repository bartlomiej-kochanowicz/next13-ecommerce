"use client";

import { type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../atoms/Input";
import { debounce } from "@/utils/debounce";

export const SearchProducts = () => {
	const router = useRouter();

	const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
		router.push(`/search?query=${e.target.value || ""}`);
	}, 500);

	return <Input label="Search product" id="search" type="search" onChange={handleChange} />;
};
