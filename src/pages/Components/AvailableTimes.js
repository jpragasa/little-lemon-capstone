export default function AvailableTimes({ availableDatesAndTime}) {
    return <ul>
        {availableDatesAndTime?.map((_,index) => {
            const splitDate = _[0].split('-');
            const formattedNumber = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];
            return <ul>
                <label htmlFor={index}>{formattedNumber}</label>
                {
                    _[1].map((time,index) => {
                        return <li key={index}>{time}</li>
                    })
                }
            </ul>
        })}
    </ul>
}