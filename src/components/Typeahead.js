//import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as ReactBootStrap from "react-bootstrap";
import '../styles/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import React, { useEffect, useState, useRef } from "react";


 export const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then(pokemonArr => {
      return pokemonArr.map(value =>
        value
          .json()
          .then(({ name }) =>
            pokemon.push({ name })
          )
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <Typeahead
        className = "typeahead"
        clearButton
        defaultSelected={options.slice(0, 1)}
        id="selections-example"
        labelKey="name"
        onInputChange={(text, e) => { console.log(text, e); }}
        options={options}
        placeholder="Choose a charactor"
        styles={{}}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

