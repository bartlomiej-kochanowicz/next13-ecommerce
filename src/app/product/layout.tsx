import { type FC, type ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
	<main className="mx-auto my-20 max-w-5xl">{children}</main>
);

export default Layout;
