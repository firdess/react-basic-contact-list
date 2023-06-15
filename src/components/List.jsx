import React from 'react'
import Item from './Item';

export default function List({ personList, removePerson,openDetailModal }) {
  
  if (personList.length === 0) {
    return (
      <div className="person-list no-persons-message">Listede kayıtlı kimse yok.</div>
    );
  }
  return (
    <div className="person-list">
      {
        personList.map((item) => {
          const { id } = item;
          return <Item key={id} item={item} removePerson={removePerson}  openDetailModal={openDetailModal}/>
        })
      }
    </div>
  )
}
