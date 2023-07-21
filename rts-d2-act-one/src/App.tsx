import './App.css'
import Card from './Components/card.tsx'

// my answer
// const items = [{
//   imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//   title: "Basic Tee",
//   price: 35,
// },
// {
//   imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
//   title: "Basic White Tee",
//   price: 35,
// },
// {
//   imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
//   title: "Basic Charcoal Tee",
//   price: 35,
// },
// {
//   imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
//   title: "Artwork Dots Tee",
//   price: 45,
// },
// ]

// function App() {
const App: React.FC = () => {
  return (
    <>
    {/* Solution */}
    <div className="card-component">
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        title="Basic Tee"
        price="35"
        buttonText="Add to Cart"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
        title="Basic White Tee"
        price="35"
        buttonText="Add to Basket"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
        title="Basic Charcoal Tee"
        price="35"
        buttonText="Add to Cart"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
        title="Artwork Dots Tee"
        price="45"
        buttonText="Add to Basket"
      />
    </div>


    {/* MyAnswer */}
    {/* {
    items.map(details =>
        <div className="container">
          <div className="item-card">
            <div>
              <img src={details.imageUrl} alt="Error" className="item-img"/>
            </div>
            <div className="item-detail">
              <h4 className="item-title">{details.title}</h4>
              <h5 className="item-price">{details.price}</h5>
              <button value="Cart" className="item-button">Add to Cart</button>
            </div>
          </div>
        </div>
          )
    } */}
    </>
  )
}

export default App
