"use client";
import React, { useEffect, useState } from "react";
import "./hero-style.css";
import { krona } from "@/fonts/fonts";
/*
"powerstats": {
            "intelligence": 38,
            "strength": 100,
            "speed": 17,
            "durability": 80,
            "power": 24,
            "combat": 64
        },
*/
const Hero = (props: { selectedHero: any }) => {
  const aux = [
    {
      name: "Intelligence",
      data: props.selectedHero.powerstats.intelligence,
    },
    {
      name: "Strength",
      data: props.selectedHero.powerstats.strength,
    },
    { name: "Speed", data: props.selectedHero.powerstats.speed },
    {
      name: "Durability",
      data: props.selectedHero.powerstats.durability,
    },
    {
      name: "Power",
      data: props.selectedHero.powerstats.power,
    },
    {
      name: "Combat",
      data: props.selectedHero.powerstats.combat,
    },
  ];
  return (
    <div className="container-hero">
      <div
        className="photo-hero"
        style={{ backgroundImage: `url(${props.selectedHero.images.sm})` }}
      ></div>
      <h1 id="title-hero-select" className={krona.className}>
        {props.selectedHero.name}
      </h1>
      <div className="powerstats">
        {aux.map((item: any, index: number) => (
          <div className="flex" key={index}>
            <h2 className={krona.className}>
              {item.name} : {item.data}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
