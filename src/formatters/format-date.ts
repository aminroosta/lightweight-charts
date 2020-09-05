const getMonth = (date: Date, locale: string) => date.toLocaleDateString(locale).split('/')[1];
const getDay = (date: Date, locale: string) => date.toLocaleDateString(locale).split('/')[2];

const dd = (date: Date, locale: string) => getDay(date, locale);
const MMMM = (date: Date, locale: string) => new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
	.toLocaleString(locale, { month: 'long' });
const MMM = (date: Date, locale: string) => date.toLocaleString(locale, { month: 'short' });
const MM = (date: Date, locale: string) => getMonth(date, locale);
const yy = (date: Date, locale: string) => date.toLocaleDateString(locale).split('/')[0].slice(2,4);
const yyyy = (date: Date, locale: string) => date.toLocaleDateString(locale).split('/')[0];

export function formatDate(date: Date, format: string, locale: string): string {
	return format
		.replace(/yyyy/g, yyyy(date, locale))
		.replace(/yy/g, yy(date, locale))
		.replace(/MMMM/g, MMMM(date, locale))
		.replace(/MMM/g, MMM(date, locale))
		.replace(/MM/g, MM(date, locale))
		.replace(/dd/g, dd(date, locale))
	;
}
