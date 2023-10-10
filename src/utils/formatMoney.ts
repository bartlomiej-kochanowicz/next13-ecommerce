export const formatMoney = (money: number) =>
	new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(money / 100);
