import './styles/Product.css'

export function Product({id, name, price, description}) {
  return (
    <>
      <li key={id} className='box'>
        <div className='name box-item'>{name}</div>
        <div className='price box-item'>{`$ ${price}`}</div>
        <div className='description box-item'>{description}</div>
      </li>
    </>
  )
}
