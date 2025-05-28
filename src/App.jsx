import './App.css'
import placeholder from './assets/placeholder.jpg'
import demoImg from './assets/demo.png'
import Card from './Card'


function App() {
  return (
    <div className='cards'>
      <Card>
        <h3 className="card__title">No images</h3>
        <p className="card__text">This card has no images attached</p>
        <button onClick={(e) => {console.log('card1 button press')}} className="card__button">Go somewhere where you can find images.</button>
      </Card>
      <Card img_top={placeholder}>
        <h3 className="card__title">One image</h3>
        <p className="card__text">This card has an image at the top.</p>
        <button onClick={(e) => {console.log('card2 button press')}} className="card__button">Go somewhere where there are more images.</button>
      </Card>
      <Card img_bottom={placeholder}>
        <h3 className="card__title">Also one image</h3>
        <p className="card__text">This card also has an image, but it's different.</p>
        <button onClick={(e) => {console.log('card3 button press')}} className="card__button">More images</button>
      </Card>
      <Card img_top={placeholder} img_bottom={demoImg}>
        <h3 className="card__title">Card title</h3>
        <p className="card__text">
          Clearly, this card has at least one image. (Images can be different)
          And a lot of text. <span style={{color:'blue'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
        </p>
        <button onClick={(e) => {console.log('card4 button press')}} className="card__button">Perfection</button>
      </Card>
    </div>
  )
}

export default App
