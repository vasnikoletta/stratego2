import React from 'react';
import { HomeButton } from "../context.js";


export function WaitPage() {
  const roomNr = Date.now();
  return (
    <>
    <h3>Várakozás második játékosra.</h3>
    <p>Szoba azonosítója: {roomNr}.</p>
    <HomeButton/>
    </>
  );
}

export default WaitPage;