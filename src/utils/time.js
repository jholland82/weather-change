export function convertDate(date) {
  const d = new Date(date * 1000)
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

export default convertDate;
