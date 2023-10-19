import React, { useState } from 'react';
import HeaderPokemon from "./Components/HeaderPokemon";
import Pokemon from "./Components/Pokemon";
import './style/style.css'

function App(props) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <div className="App">
            <header>
                <HeaderPokemon selectedPokemon={selectedPokemon} />
            </header>
            <main>
                <Pokemon setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon}/>
            </main>
        </div>
    );
}

export default App;
