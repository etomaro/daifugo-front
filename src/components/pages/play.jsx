import React, { useState, useEffect } from 'react';

import { Setting } from '../setting'
import { Game } from '../game'



export const Play = () => {

  const [showSetting, setShowSetting] = useState(true);
  const [showGame, setShowGame] = useState(false);

  // gameに渡すデータ
  const [data, setData] = useState({});
  const [settingsData, setSettingsData] = useState({});

  let responseData = "";
  const getResponseData = (response) => {
    responseData = response
  }

  // settingがfalseになったらgameをtrueにする
  useEffect(() => {
    if (showSetting == false) {
      setShowGame(true)
    }
  }, [showSetting])

  return (
    <>
      {showSetting && <Setting setShowSetting={setShowSetting} setData={setData} setSettingsData={setSettingsData}/>}
      {showGame && <Game data={data} settings={settingsData}/>}
    </>
  )
}