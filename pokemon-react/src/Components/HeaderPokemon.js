import React from 'react';
import logo from '../img/logo.png';

export default function HeaderPokemon(props) {
    const { selectedPokemon } = props;
const s = () => {
    console.log(selectedPokemon)
}
    return (
        <>
            <img src={logo} alt="" style={{width:'370px', height:'150px'}}/>
            <div className="settings">
                <div className="information-about-pokemon">
                    <p onClick={s}>Choose you pokemon</p>
                    <div className="inner-info">
                        <p>Pokemon rairly: <br/> <span id='rairly'>{selectedPokemon && selectedPokemon.data ? selectedPokemon.data.stats[0].base_stat : 'N/A'}</span></p>
                        <p>Pokemon power: <br/> <span id='power'>{selectedPokemon && selectedPokemon.data ? selectedPokemon.data.stats[1].base_stat : 'N/A'}</span></p>
                        {selectedPokemon ?
                            <div className="powers">
                                {selectedPokemon.data.abilities.map((ability, index) => (
                                    <p key={index}>Power: {ability.ability.name}</p>
                                ))}
                            </div>
                            :
                            'N/A'
                        }

                    </div>
                </div>
            </div>
        </>
    );
};
