import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <div className="p-4">
                <Card
                key={item.id}
                {...item}
            />
            </div>
            
        )
    })        
    
          
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="flex">
                {cards}
            </section>
        </div>
    )
}