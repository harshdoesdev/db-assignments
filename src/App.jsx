import Card from "./components/Card.jsx"

import './App.css';

import photo1 from './assets/photo1.webp';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';

const cards = [
  { id: 1, title: "Pappa podden", views: 1500, episode: "S1 Ep 01", paid: true, photo: photo1, },
  { id: 2, title: "Pappa podden", views: 1500, episode: "S1 Ep 01", paid: true, photo: photo2, },
  { id: 3, title: "Parched Power with Deepak", views: 1500, episode: "S1 Ep 01", paid: false, photo: photo3, },
];

function App() {

  return (
    <div className="cards">
      {
        cards.map(card => (
          <Card key={card.id} card={card} />
        ))
      }
    </div>
  )
}

export default App
