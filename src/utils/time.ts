export default function unixToDate(unix:number | null){
    // const dateObject = new Date(unix * 1000)
    // return `${dateObject.getDate()}.${dateObject.getMonth()}.${dateObject.getFullYear()}` //2019-12-9 10:30:15
    if(unix === null){ return null }
    const dateObject = new Date(unix * 1000)
    const yy:string = String(dateObject.getFullYear()).split('').slice(2).join('');
    let mm:number = dateObject.getMonth() + 1; // Months start at 0!
    let dd:number = dateObject.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '.' + mm + '.' + yy;
    return formattedToday
}