
import { useState } from 'react'
import DetailModal from './components/DetailModal';
import List from './components/List';
import Modal from './components/Modal';
import './styles/styles.css'

const person = [{
  id: 1,
  name: 'Ayşe',
  surname: 'Güven',
  tel: 5555555,
  email: 'ayşe@gmail.com',
  adress: 'şişli sokak'

}, {
  id: 2,
  name: 'Emre',
  surname: 'Güven',
  tel: 4444444,
  email: 'emre@gmail.com',
  adress: 'şişli sokak'

}]


function App() {

  const [personList, setPersonList] = useState(person);
  const [isOpen, setIsOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedPerson, setSelecetedPerson] = useState(null)
  const [searchText, setSearchText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    tel: '',
    email: '',
    adress: ''
  })

  const searchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredPersons = personList.filter((person) => {
    const fullname = `${person.name} ${person.surname}`.toLowerCase()
    return fullname.includes(searchText.toLowerCase())
  })



  const onChangeHandler = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  const addPerson = (input) => {
    setPersonList(prevPersonList => ([
      { name: input.name, surname: input.surname, tel: input.tel, email: input.email, adress: input.adress, id: prevPersonList.length + 1 },
      ...prevPersonList
    ]))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addPerson(formData);
    closeModal();

  };

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      surname: '',
      tel: '',
      email: '',
      adress: ''
    });
  }

  const removePerson = (id) => {

    setPersonList(() => personList.filter((item) => id !== item.id))
  }

  const openDetailModal = (personId) => {
    const selectedPerson = personList.find((person) => person.id === personId)
    if (selectedPerson) {
      setSelecetedPerson(selectedPerson)
    }
    setDetailOpen(true)
  }

  const closeDetailModal = () => {
    setSelecetedPerson(null);
    setDetailOpen(false)
  }


  return (
    <div className="container">
      <h1>Kişi Rehberi</h1>
      <div className="search-area">
        <div className="search-input">
          <input
            type="text"
            placeholder='Ara'
            value={searchText}
            onChange={searchChange}
          />
        </div>
        <div className="button">
          <button className="btn btn-add" onClick={openModal}>Yeni Kişi Ekle</button>
        </div>
      </div>
      <List
        personList={filteredPersons}
        removePerson={removePerson}
        openDetailModal={openDetailModal}
      />
      <Modal
        closeModal={closeModal}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        formData={formData}
        isOpen={isOpen}
      />
      <DetailModal
        selectedPerson={selectedPerson}
        detailOpen={detailOpen}
        closeDetail={closeDetailModal}
      />
    </div>
  )
}

export default App
