import { type FC, type ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
	<main className="mx-auto mb-20 mt-28 max-w-5xl sm:mt-20">{children}</main>
);

export default Layout;
