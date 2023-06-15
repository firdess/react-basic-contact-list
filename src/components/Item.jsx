import React from 'react'

export default function Item({ item,removePerson,openDetailModal }) {
  const {id,name,surname}=item;
  return(
    <div className="list-item">
      <div className="item-fullname">{name} {surname}</div>
      <div className="button-area">
        <button className="btn btn-detail" onClick={()=>openDetailModal(id)} >Detay</button>
        <button className="btn btn-delete" onClick={()=>removePerson(id)}>Sil</button>
      </div>
    </div>
  )
}
