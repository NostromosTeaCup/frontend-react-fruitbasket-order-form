import React, {useState} from 'react';
import './App.css';

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section
            className="fruit-counters">
            <article>
               <h2>🍓 Aardbeien</h2>
               <button
                   className="button-minus"
                    type="button"
                    disabled={strawberries === 0}
                    onClick={() => setStrawberries(strawberries-1)}
               >
               </button>
                <p>
                    {strawberries}
                </p>
                <button
                    className="button-plus"
                    type="button"
                    onClick={() => setStrawberries(strawberries + 1)}
                >
                </button>
            </article>
            <article>
                <h2>🍌 Bananen</h2>
                <button
                    className="button-minus"
                    type="button"
                    disabled={bananas === 0}
                    onClick={() => setBananas(bananas - 1)}
                >
                </button>
                <p>
                    {bananas}
                </p>
                <button
                    className="button-plus"
                    type="button"
                    onClick={() => setBananas(bananas + 1)}
                >

                </button>
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <button
                    className="button-minus"
                    type="button"
                    disabled={apples === 0}
                    onClick={() => setAppels(apples - 1)}
                >
                </button>
                <p>
                    {apples}
                </p>
                <button
                    className="button-plus"
                    type="button"
                    onClick={() => setAppels(apples + 1)}
                >
                </button>
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <button
                    className="button-minus"
                    type="button"
                    disabled={kiwis === 0}
                    onClick={() => setKiwis(kiwis - 1)}
                >
                </button>
                <p>{kiwis}</p>
                <button
                    className="button-plus"
                    type="button"
                    onClick={() => setKiwis(kiwis + 1)}
                >
                </button>
            </article>
            <button className="button-reset">reset</button>
        </section>
    </>
  );
}

export default App;
