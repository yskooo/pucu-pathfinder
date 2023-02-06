import {useState} from 'react'
import data from '../../data/research.json'
import ResearchCard from './ResearchCard'

const Filter = ({filterItem, setItem, menuItems}) => {
  return (
    <div className='flex flex-row justify-center'>
        {menuItems && Array.isArray(menuItems) && menuItems.map((Value, id) => {
           
           return (
                <button className=""
                        key={id}
                        onClick={() => filterItem(Value)}
                >
                    {Value}
                </button>
            );
        })}
        <button className=''
          onClick={() => setItem(data)}>
         All
        </button>
    </div>
  )
}

export default Filter
