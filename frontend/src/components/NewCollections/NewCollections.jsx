import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = (props) => {
  return (
    <div className='new-collections'>
      <h2>NEW COLLECTIONS</h2>
      <hr />
     
      <div className="collections">
    {new_collection.map((item) => (
        <Item key={item.id} {...item} />
    ))}
      </div>
      
    </div>
  )
}

export default NewCollections
