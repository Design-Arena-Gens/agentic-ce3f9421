'use client'

import { useState } from 'react'

interface Toy {
  id: number
  name: string
  description: string
  price: number
  age: string
  category: string
  icon: string
  features: string[]
}

const toys: Toy[] = [
  {
    id: 1,
    name: "Building Blocks Set",
    description: "Colorful building blocks to spark creativity and develop motor skills.",
    price: 29.99,
    age: "3-6 years",
    category: "Educational",
    icon: "🧱",
    features: [
      "100 pieces in various colors",
      "Safe, non-toxic materials",
      "Develops spatial awareness",
      "Encourages creative thinking",
      "Includes storage box"
    ]
  },
  {
    id: 2,
    name: "Musical Keyboard",
    description: "Interactive keyboard with lights and songs to introduce music.",
    price: 45.99,
    age: "2-5 years",
    category: "Musical",
    icon: "🎹",
    features: [
      "20 pre-loaded songs",
      "Light-up keys",
      "Record and playback function",
      "Volume control",
      "Animal sound effects"
    ]
  },
  {
    id: 3,
    name: "Stuffed Teddy Bear",
    description: "Soft and cuddly teddy bear, perfect companion for bedtime.",
    price: 24.99,
    age: "0-10 years",
    category: "Plush",
    icon: "🧸",
    features: [
      "Super soft plush material",
      "Machine washable",
      "Hypoallergenic filling",
      "15 inches tall",
      "Perfect for hugging"
    ]
  },
  {
    id: 4,
    name: "Science Lab Kit",
    description: "Exciting experiments to learn about chemistry and physics.",
    price: 39.99,
    age: "8-12 years",
    category: "Educational",
    icon: "🔬",
    features: [
      "50+ experiments included",
      "Safety goggles provided",
      "Educational guidebook",
      "All materials included",
      "STEM certified"
    ]
  },
  {
    id: 5,
    name: "Remote Control Car",
    description: "Fast racing car with easy-to-use remote control.",
    price: 34.99,
    age: "6-12 years",
    category: "Outdoor",
    icon: "🏎️",
    features: [
      "Up to 30 mph speed",
      "50 meter range",
      "Rechargeable battery",
      "LED headlights",
      "All-terrain wheels"
    ]
  },
  {
    id: 6,
    name: "Art Supply Set",
    description: "Complete art set with crayons, markers, and colored pencils.",
    price: 27.99,
    age: "4-10 years",
    category: "Creative",
    icon: "🎨",
    features: [
      "150+ pieces total",
      "Water-based markers",
      "Coloring book included",
      "Portable carrying case",
      "Non-toxic materials"
    ]
  },
  {
    id: 7,
    name: "Puzzle Adventure",
    description: "Challenging jigsaw puzzles with beautiful illustrations.",
    price: 19.99,
    age: "5-10 years",
    category: "Educational",
    icon: "🧩",
    features: [
      "500 piece puzzle",
      "High quality pieces",
      "Develops problem solving",
      "Beautiful artwork",
      "Finished size: 20x28 inches"
    ]
  },
  {
    id: 8,
    name: "Soccer Ball",
    description: "Durable soccer ball perfect for outdoor play and exercise.",
    price: 16.99,
    age: "5-15 years",
    category: "Outdoor",
    icon: "⚽",
    features: [
      "Official size and weight",
      "Weather resistant",
      "Soft touch surface",
      "Includes pump",
      "Perfect for training"
    ]
  },
  {
    id: 9,
    name: "Robot Coding Kit",
    description: "Build and program your own robot with this interactive kit.",
    price: 89.99,
    age: "10-16 years",
    category: "Educational",
    icon: "🤖",
    features: [
      "App-based coding",
      "300+ building pieces",
      "Voice control capable",
      "Multiple robot designs",
      "STEM learning certified"
    ]
  },
  {
    id: 10,
    name: "Dollhouse Playset",
    description: "Multi-room dollhouse with furniture and accessories.",
    price: 69.99,
    age: "3-8 years",
    category: "Creative",
    icon: "🏠",
    features: [
      "3 floors, 6 rooms",
      "15 furniture pieces",
      "Fits standard dolls",
      "Easy assembly",
      "Sturdy wood construction"
    ]
  },
  {
    id: 11,
    name: "Basketball Hoop",
    description: "Adjustable basketball hoop for indoor or outdoor use.",
    price: 54.99,
    age: "4-12 years",
    category: "Outdoor",
    icon: "🏀",
    features: [
      "Height adjustable (3-6 ft)",
      "Weather resistant",
      "Includes basketball",
      "Stable base design",
      "Easy to move"
    ]
  },
  {
    id: 12,
    name: "Magic Show Kit",
    description: "Learn and perform amazing magic tricks for friends and family.",
    price: 32.99,
    age: "7-14 years",
    category: "Creative",
    icon: "🎩",
    features: [
      "50+ magic tricks",
      "Instructional videos",
      "Magic wand included",
      "Playing cards deck",
      "Beginner friendly"
    ]
  }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedToy, setSelectedToy] = useState<Toy | null>(null)

  const categories = ['All', 'Educational', 'Outdoor', 'Creative', 'Musical', 'Plush']

  const filteredToys = selectedCategory === 'All'
    ? toys
    : toys.filter(toy => toy.category === selectedCategory)

  return (
    <div className="container">
      <header className="header">
        <h1>🎪 Kids Toys World 🎪</h1>
        <p>Discover amazing toys that inspire creativity and learning!</p>
      </header>

      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="toys-grid">
        {filteredToys.map(toy => (
          <div
            key={toy.id}
            className="toy-card"
            onClick={() => setSelectedToy(toy)}
          >
            <div className="toy-icon">{toy.icon}</div>
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <div className="toy-details">
              <div>
                <div className="age-badge">{toy.age}</div>
                <div className="category-badge" style={{ marginTop: '8px' }}>
                  {toy.category}
                </div>
              </div>
              <div className="price">${toy.price}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedToy && (
        <div className="modal" onClick={() => setSelectedToy(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedToy(null)}>
              ×
            </button>
            <div className="modal-icon">{selectedToy.icon}</div>
            <h2>{selectedToy.name}</h2>
            <p>{selectedToy.description}</p>
            <div className="price">${selectedToy.price}</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <span className="age-badge">{selectedToy.age}</span>
              <span className="category-badge">{selectedToy.category}</span>
            </div>

            <div className="features">
              <h4>Features:</h4>
              <ul>
                {selectedToy.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <button className="buy-btn">
              Add to Cart - ${selectedToy.price}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
