"use client";

import { clsx } from "clsx";
import { Search } from "lucide-react";
import { type InputHTMLAttributes, forwardRef } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label: string;
	id: string;
	type?: "search" | "text";
}

const Input = forwardRef<HTMLInputElement, IInput>(
	({ className, label, id, type = "text", ...rest }, ref) => (
		<div className={clsx("relative", className)}>
			<label htmlFor={id} className="hidden">
				{label}
			</label>

			{type === "search" && (
				<Search className="absolute left-3 top-[0.6rem] h-5 w-5 text-neutral-400" />
			)}

			<input
				ref={ref}
				type={type}
				id={id}
				className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 outline-offset-1 outline-purple-400"
				placeholder="Search Mockups, Logos..."
				{...rest}
			/>
		</div>
	),
);

Input.displayName = "Input";

export { Input };
