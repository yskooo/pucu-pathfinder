import React from 'react'
import data from '../../data/research.json'

const FilterButtons = ({filterItem, setItem, menuItems}) => {
  return (
    <>
        <div className="flex justify-center">
            {menuItems.map((item, id) => {
                return (
                    <button className="px-2 border"
                             key={id}
                            onClick={() => filterItem(item)}
                           >
                      {item}
                    </button>
                ); 
            })}
            <button
            className='px-3 border'
            onClick={() => setItem(data)}>
                All
            </button>
        </div>
    </>
  )
}

export default FilterButtons