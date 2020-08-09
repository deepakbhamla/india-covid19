import React from 'react'
import './card-list.style.css'
import Card from '../card/card.component'

export const CardList = (props) => {
    return (
        <div>
      <table className='table-head'>
        <thead >
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
        </thead>
     </table>
        {
          props.datalists.map(datalist => (
              <Card key={datalist.statecode} datalist = {datalist}>
                    
              </Card>
          ))
        }

        </div>
    )
}
export default CardList
