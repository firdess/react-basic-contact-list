import React from 'react'

export default function DetailModal({ selectedPerson, detailOpen, closeDetail }) {
  if (!selectedPerson) {
    return null;
  }
  const { name, surname, tel, adress, email } = selectedPerson;
  return (
    <div className={detailOpen ? 'detail-modal detail-open' : 'detail-modal'}>
      <div className="modal-content">
        <h2>Kişi detayı</h2>
        <div className="content">
          <p><b>İsim:</b> {name}</p>
          <p><b>Soyisim:</b> {surname}</p>
          <p><b>Telefon:</b> {tel}</p>
          <p><b>Email</b> {email} </p>
          <p><b>Adres:</b> {adress} </p>
        </div>
        <button className="btn btn-close" onClick={closeDetail} >
          X
        </button>
      </div>
    </div>
  )
}
