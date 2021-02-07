export const dateRange = (length) => {
    const now = new Date();
    now.setDate(now.getDate() - length);
    const startDate = now.getDate()+', '+now.toLocaleString('ru', {weekday: 'short'})
    const dates = [
        startDate
    ]

    let curDate = now.toISOString().slice(0,10);

    for(let i = 0; i < Math.abs(length); i++){
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
