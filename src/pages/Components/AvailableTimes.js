export default function AvailableTimes({ timesAvailable }) {
    return <ul style={{listStyle:"none", fontSize:"30px"}}>
        {timesAvailable?.map((_,index) => {
            return <li key={index}>{_}</li>
        })}
    </ul>
}