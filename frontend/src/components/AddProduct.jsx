import { useState, useContext } from "react"
import Context from '../context/authContext'
import './styles/AddProduct.css'

export function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const { userId } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        userId,
        price,
        description
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='form-title'>Information</h3>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          className='input'
          />
        <input 
          type='text'
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
          className='input'
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className='input'
          placeholder='Description'
        >
        </textarea>
        <button className='form-btn input'>Submit</button>
      </form>
    </>
  )
}
