import React from 'react'

export default function Modal({ isOpen, closeModal, onChangeHandler, formData, submitHandler }) {

const {name,surname,tel,adress,email}=formData;

  return (
    <div className={isOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal">
        <div className="title">
          <h3>Kişi Ekle</h3>
        </div>
        <div className="button" >
          <button className="btn btn-close" onClick={closeModal}>X</button>
        </div>
        <form className="form" onSubmit={submitHandler} >
          <div className="form-group">
            <label htmlFor="name">Ad: </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="ad"
              onChange={onChangeHandler}
              required

            />
          </div>
          <div className="form-group">
            <label>Soyad: </label>
            <input
              type="text"
              name='surname'
              value={surname}
              placeholder="soyad"
              onChange={onChangeHandler} 
              required
              />
          </div>
          <div className="form-group">
            <label>Tel: </label>
            <input
              type="tel"
              name='tel'
              value={tel}
              placeholder="+90"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              name='email'
              value={email}
              placeholder="@email"
              onChange={onChangeHandler} 
              required
              />
          </div>
          <div className="form-group">
            <label>Adress: </label>
            <input
              type="adress"
              name='adress'
              value={adress}
              placeholder="adress"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="button-submit">
            <button type="submit" className="btn">Kişi ekle</button>
          </div>
        </form>
      </div>
    </div>
  )
}
