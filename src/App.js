import React, {useState} from 'react';
import './App.css';

function App() {
    //variabelen voor fruit counter
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    //variabelen voor formulier
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('0');
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);


    //functie reset button alles op 0 terug zetten
    function resetFruits() {
        setStrawberries(0);
        setBananas(0);
        setAppels(0);
        setKiwis(0)
    }

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
            <button
                className="button-reset"
                type="button"
                onClick={() => resetFruits()}
            >
                reset
            </button>
        </section>

        <form>
            <section>
                <label htmlFor="first-name">
                    Voornaam
                </label>
                <input
                    type="text"
                    name="firstname"
                    id="first-name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    />
            </section>
            <section>
                <label htmlFor="last-name">
                    Achternaam
                </label>
                <input
                    type="text"
                    name="lastname"
                    id="last-name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="age">
                    Leeftijd
                </label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="zipcode">
                    Postcode
                </label>
                <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="delivery">
                    Bezorgfrequentie
                </label>
                <select
                    name="delivery"
                    id="delivery"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}>
                    <option
                        value="week">
                        Iedere week
                    </option>
                    <option
                        value="biweekly">
                        Om de week
                    </option>
                    <option
                        value="month">
                        Iedere maand
                    </option>
                </select>
            </section>
            <section>
                <input type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-daytime"
                    checked={deliveryTimeslot === 'daytime'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}/>
                <label
                    htmlFor="timeslot-daytime">
                    Overdag
                </label>
                <input type="radio"
                       value="evening"
                       name="timeslot"
                       id="timeslot-evening"/>
                <label
                    htmlFor="timeslot-evening">
                    's Avonds
                </label>
            </section>
            <section>
                <label htmlFor="remark">Opmerking</label>
                <textarea
                    name="remark"
                    id="remark"
                    cols="40"
                    rows="6"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}>
                </textarea>
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    value={agreeTerms}
                    onChange={(e) => toggleAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree">Ik ga akkoord met de voorwaarden</label>
            </section>

            <button>Verzend</button>
        </form>
    </>
  );
}

export default App;
