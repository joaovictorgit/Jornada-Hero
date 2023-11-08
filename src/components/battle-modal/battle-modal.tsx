import { krona } from "@/fonts/fonts";
import { v4 as uuidv4 } from "uuid";
import "./battle-modal-style.css";

const BattleModal = (props: { hero: any; close: any }) => {
  return (
    <div className="container-hero-modal">
      <button
        className="btn-close"
        onClick={() => {
          props.close();
        }}
      >
        <label className={krona.className}>Fechar</label>
      </button>
    </div>
  );
};

export default BattleModal;
/*
 <Carroussel
        cards={props.heroes}
        height="200px"
        width="10%"
        margin="0px 0px 0px -620px"
        offset={2}
        showArrows={false}
      />
      <button
        className="btn-close"
        onClick={() => {
          props.close();
          props.setIsBattle(false);
        }}
      >
        <label className={krona.className}>Fechar</label>
      </button>
*/
