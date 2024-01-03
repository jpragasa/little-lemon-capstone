export default function AvailableTimes({ availableDatesAndTime}) {
    return <ul>
        {availableDatesAndTime?.map((_,index) => {
            return <ul>
                <label htmlFor={index}>{_[0]}</label>
                {
                    _[1].map((time,index) => {
                        return <li key={index}>{time}</li>
                    })
                }
            </ul>
        })}
    </ul>
}