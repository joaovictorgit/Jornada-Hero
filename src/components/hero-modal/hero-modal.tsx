import { krona } from "@/fonts/fonts";
import "./hero-modal-style.css";
import { useState } from "react";
import { useStore } from "@/store/store";

const HeroModal = (props: { hero: any; close: any }) => {
  const { array, addToArray } = useStore();
  const [nameHeroModal, setNameHeroModal] = useState("");
  const [heroModal, setHeroModal] = useState<any>(null);
  const [winner, setWinner] = useState("");

  const aux = [
    {
      name: "Intelligence",
      data: props.hero.powerstats.intelligence,
    },
    {
      name: "Strength",
      data: props.hero.powerstats.strength,
    },
    { name: "Speed", data: props.hero.powerstats.speed },
    {
      name: "Durability",
      data: props.hero.powerstats.durability,
    },
    {
      name: "Power",
      data: props.hero.powerstats.power,
    },
    {
      name: "Combat",
      data: props.hero.powerstats.combat,
    },
  ];

  const searchNameHeroModal = () => {
    const heroesSearch = array[0];
    const r = heroesSearch.filter((h: any) => h.name === nameHeroModal);
    setHeroModal(r[0]);
  };

  const battleHero = (hero1: any, hero2: any) => {
    let power1 =
      hero1.powerstats.intelligence +
      hero1.powerstats.strength +
      hero1.powerstats.speed +
      hero1.powerstats.durability +
      hero1.powerstats.power +
      hero1.powerstats.combat;
    let power2 =
      hero2.powerstats.intelligence +
      hero2.powerstats.strength +
      hero2.powerstats.speed +
      hero2.powerstats.durability +
      hero2.powerstats.power +
      hero2.powerstats.combat;
    let result;
    if (power1 >= power2) {
      result = hero1.name;
    } else {
      result = hero2.name;
    }
    setWinner(`Winner ${result}`);
  };

  return (
    <div className="container-hero-modal">
      <div className="search-item-modal">
        <input
          type="text"
          className="input"
          placeholder="Name Hero"
          value={nameHeroModal}
          onChange={(e: any) => setNameHeroModal(e.target.value)}
        />
        <button onClick={searchNameHeroModal}>
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      <div
        className="photo-hero-modal"
        style={{ backgroundImage: `url(${props.hero.images.sm})` }}
      ></div>
      <h1 id="title-hero-select-modal" className={krona.className}>
        {props.hero.name}
      </h1>
      <div className="powerstats-modal">
        <h1 className={krona.className}>Skills</h1>
        {aux.map((item: any, index: number) => (
          <div className="flex" key={index}>
            <h2 className={krona.className} style={{ fontSize: 10 }}>
              {item.name} : {item.data}
            </h2>
          </div>
        ))}
      </div>
      {heroModal ? (
        <>
          <div
            className="photo-hero-modal-search"
            style={{ backgroundImage: `url(${heroModal.images.sm})` }}
          ></div>
          <h1 id="title-hero-select-modal-search" className={krona.className}>
            {heroModal.name}
          </h1>
          <div className="powerstats-modal-search">
            <h1 className={krona.className}>Skills</h1>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Intelligence : {heroModal.powerstats.intelligence}
              </h2>
            </div>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Strength : {heroModal.powerstats.strength}
              </h2>
            </div>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Speed : {heroModal.powerstats.speed}
              </h2>
            </div>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Durability : {heroModal.powerstats.durability}
              </h2>
            </div>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Power : {heroModal.powerstats.power}
              </h2>
            </div>
            <div className="flex">
              <h2 className={krona.className} style={{ fontSize: 10 }}>
                Combat : {heroModal.powerstats.combat}
              </h2>
            </div>
          </div>
        </>
      ) : null}
      {heroModal !== null && (
        <button
          className="btn-battle"
          onClick={() => battleHero(props.hero, heroModal)}
        >
          <label className={krona.className}>Battle</label>
        </button>
      )}
      {winner !== "" ? (
        <h1 id="winner" className={krona.className}>
          {winner}
        </h1>
      ) : null}
      <button className="btn-close" onClick={props.close}>
        <label className={krona.className}>Close</label>
      </button>
    </div>
  );
};

export default HeroModal;
/*

*/
