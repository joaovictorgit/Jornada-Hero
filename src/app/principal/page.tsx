"use client";
import { krona } from "@/fonts/fonts";
import "./principal-style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "@mui/material";
import GridList from "@/components/grid-list/grid-list";
import Box from "@mui/material/Box";
import HeroModal from "@/components/hero-modal/hero-modal";
import Hero from "@/components/hero/hero";
import { useStore } from "@/store/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 350,
  bgcolor: "#212121",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Principal: React.FC = () => {
  const { array, addToArray } = useStore();
  const [isBattle, setIsBattle] = useState(false);
  const [heroes, setHeroes] = useState<any>([]);
  const [nameHero, setNameHero] = useState("");
  const [selectHero, setSelectHero] = useState<any>(heroes[0]);
  const [heroModal, setHeroModal] = useState<any>({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      axios
        .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
        .then((response: any) => {
          setHeroes(response.data);
        });
    } catch (err: unknown) {
      console.error(err);
    }
  }, []);

  const searchNameHero = () => {
    const r = heroes.filter((h: any) => h.name === nameHero);
    setHeroModal(r[0]);
    addToArray(heroes);
    handleOpen();
  };

  return (
    <div className="flex flex-col h-full bg-[#121212] bg-cover bg-center">
      <div className="container-header">
        <div className="image-header"></div>
        <h1 id="title-header" className={krona.className}>
          Heroes Journey
        </h1>
      </div>
      <div className="search-item">
        <input
          type="text"
          className="input"
          placeholder="Name Hero"
          value={nameHero}
          onChange={(e: any) => setNameHero(e.target.value)}
        />
        <button onClick={searchNameHero}>
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
      <div className="flex flex-col my-20 justify-center ">
        <div className="flex flex-row">
          <h1 className={krona.className} id="title-body">
            List Heroes
          </h1>
        </div>

        <GridList array={heroes} selectHero={setSelectHero} />
        {selectHero && <Hero selectedHero={selectHero} />}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {heroModal && <HeroModal hero={heroModal} close={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
};

export default Principal;
