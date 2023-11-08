"use client";
import { krona } from "@/fonts/fonts";
import "./grid-list-style.css";
import { Box, Modal, Pagination } from "@mui/material";
import { useState } from "react";

import usePagination from "../pagination/pagination";

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

const GridList = (props: { array: any; selectHero: any }) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 15;
  const count = Math.ceil(props.array.length / PER_PAGE);
  const _DATA = usePagination(props.array, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Pagination
        count={count}
        size="medium"
        page={page}
        shape="circular"
        onChange={handleChange}
        className="pagination-ui"
        color="primary"
        sx={{ button: { color: "#fff" } }}
      />
      <div className="grid-container">
        {_DATA.currentData().map((item: any, index: number) => (
          <>
            <div
              className="grid-item"
              key={index}
              style={{ backgroundImage: `url(${item.images.sm})` }}
              onClick={() => props.selectHero(item)}
            >
              <h1 id="title-item-grid" className={krona.className}>
                {item.name}
              </h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
// linha 53 {selectedItem && <Hero selectedHero={selectedItem} />}

export default GridList;
