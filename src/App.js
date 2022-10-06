import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-counters">
            <article>
               <h2>🍓 Aardbeien</h2>
               <button className="button-minus">-</button>
                <p>aantal</p>
                <button className="button-plus">+</button>
            </article>
            <article>
                <h2>🍌 Bananen</h2>
                <button className="button-minus">-</button>
                <p>aantal</p>
                <button className="button-plus">+</button>
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <button className="button-minus">-</button>
                <p>aantal</p>
                <button className="button-plus">+</button>
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <button className="button-minus">-</button>
                <p>aantal</p>
                <button className="button-plus">+</button>
            </article>
            <button>reset</button>
        </section>
    </>
  );
}

export default App;
