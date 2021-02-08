export const dateRange = (length) => {
    length = -length
    const now = new Date();
    const offset = (length > 0) ? length : -1;
    now.setDate(now.getDate() - offset);
    const startDate = { 'short' : now.getDate()+', '+now.toLocaleString('ru', {weekday: 'short'}), 'long': now.toISOString().slice(0,10)}
    const dates = [
        startDate
    ]

    let curDate = now.toISOString().slice(0,10);

    for(let i = 1; i < Math.abs(length); i++){
        curDate = getNext(curDate)
        let d = new Date(curDate);
        dates.push({
            long: curDate,
            short: d.getDate()+', '+d.toLocaleString('ru', {weekday: 'short'})
        })
    }

    return dates
}


function getNext (date) {
    const d0 = Date.parse(date)
    const d1 = d0 + (25 * 3600 * 1000)
    return new Date(d1).toISOString().slice(0,10)
}
