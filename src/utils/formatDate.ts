export default function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes} | ${day}.${month}.${year}`;
}
