import React from 'react'
import './card.style.css'

export const Card = (props) => {
    return (
    <table>
        <tr>
            <th className='state'>{props.datalist.state}</th>
            <th className='confirmed'>{props.datalist.confirmed}</th>
            <th className='active'>{props.datalist.active}</th>
            <th className='recovered'>{props.datalist.recovered}</th>
            <th className='deaths'>{props.datalist.deaths}</th>
        </tr>
    </table>
    )
}

export default Card
