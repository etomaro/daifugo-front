import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Setting = (props) => {
  // state
  const [numPlayer, setNumPlayer] = useState("4");
  const [playerType1, setPlayerType1] = useState("manual");
  const [playerType2, setPlayerType2] = useState("auto");
  const [playerType3, setPlayerType3] = useState("auto");
  const [playerType4, setPlayerType4] = useState("auto");
  const [autoSpeed, setAutoSpeed] = useState(0.1);
  const [isBan, setIsBan] = useState(true);
  const [isAvility, setIsAvility] = useState(false);
  const [isStairs, setIsStairs] = useState(false);
  const [isReturnSpade3, setIsReturnSpade3] = useState(false);
  const [isShowDie, setIsShowDie] = useState(true);
  const [isShowCard, setIsShowCard] = useState(false);
  const [isShowActionable, setIsShowActionable] = useState(true);

  // backend通信用
	const url = "http://127.0.0.1:8000";

  const btnClick = () => {
    // 設定情報を非表示にする
    props.setShowSetting(false)

    // debug
    console.log(
      `--debug settings--\nnumPlayer: ${numPlayer}\nplayerType1: ${playerType1}\nplayerType2: ${playerType2}\nplayerType3: ${playerType3}\nplayerType4: ${playerType4}\nautoSpeed: ${autoSpeed}\nisBan: ${isBan}
isAvility: ${isAvility}\nisStairs: ${isStairs}\nisReturnSpade3: ${isReturnSpade3}\nisShowDie: ${isShowDie}\nisShowCard: ${isShowCard}\nisShowActionable: ${isShowActionable}`
    );

    // backend通信

    // とりあえず設定情報のpostパラメーターは固定値
    const param = {
      "num_player": numPlayer,
      "player_type1": playerType1,
      "player_type2": playerType2,
      "player_type3": playerType3,
      "player_type4": playerType4,
      "auto_speed": autoSpeed,
      "is_ban": isBan,
      "is_avility": isAvility,
      "is_stairs": isStairs,
      "is_return_spade3": isReturnSpade3
    };

    const settingData = {
      "num_player": numPlayer,
      "player_type1": playerType1,
      "player_type2": playerType2,
      "player_type3": playerType3,
      "player_type4": playerType4,
      "auto_speed": autoSpeed,
      "is_ban": isBan,
      "is_avility": isAvility,
      "is_stairs": isStairs,
      "is_return_spade3": isReturnSpade3,
      "isShowDie": isShowDie,
      "isShowCard": isShowCard,
      "isShowActionable": isShowActionable
    };

    axios({
      method: 'post',
      url: url,
      data: param,
      headers: {"content-type": "application/json"},
    })
    .then(response => {
        console.log(response);
        props.setSettingsData(settingData);
        props.setData(response.data);
        
    })
    .catch(error => {
        console.error(error);
    });

  }

  const handleChange = (event) => {
    // selectのnameの値で分岐
    if (event.target.name == "numPlayer") {
      setNumPlayer(event.target.value);
    }else if (event.target.name == "playerType1") {
      setPlayerType1(event.target.value)
    }else if (event.target.name == "playerType2") {
      setPlayerType2(event.target.value)
    }else if (event.target.name == "playerType3") {
      setPlayerType3(event.target.value)
    }else if (event.target.name == "playerType4") {
      setPlayerType4(event.target.value)
    }else if (event.target.name == "autoSpeed") {
      setAutoSpeed(event.target.value)
    }else if (event.target.name == "isBan") {
      setIsBan(event.target.value)
    }else if (event.target.name == "isAvility") {
      setIsAvility(event.target.value)
    }else if (event.target.name == "isStairs") {
      setIsStairs(event.target.value)
    }else if (event.target.name == "isReturnSpade3") {
      setIsReturnSpade3(event.target.value)
    }else if (event.target.name == "isShowDie") {
      setIsShowDie(event.target.value)
    }else if (event.target.name == "isShowCard") {
      setIsShowCard(event.target.value)
    }else if (event.target.name == "isShowActionable") {
      setIsShowActionable(event.target.value)
    }
  };

  return (
    <>
      <Box ml="10%" width="80%" height="80%">
        <Table sx={{ minWidth: 100 }}>
          <TableBody>
            {/* 人数 */}
            <TableRow>
              <TableCell align="left">人数</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="num-player-select-label">人数</InputLabel>
                  <Select
                    value={numPlayer}
                    label="NumPlayer"
                    onChange={handleChange}
                    name="numPlayer"
                  >
                    <MenuItem value={"4"}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {/* AUTO速度 */}
              <TableCell align="left">AUTO速度</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="auto-speed-select-label">AUTO速度</InputLabel>
                  <Select
                    value={autoSpeed}
                    label="autoSpeed"
                    onChange={handleChange}
                    name="autoSpeed"
                  >
                    <MenuItem value={0.01}>0.01</MenuItem>
                    <MenuItem value={0.1}>0.1</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* プレイヤー1 */}
            <TableRow>
              <TableCell align="left">プレイヤー1</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="player-type-1-select-label">プレイヤー1</InputLabel>
                  <Select
                    value={playerType1}
                    label="playerType1"
                    onChange={handleChange}
                    name="playerType1"
                  >
                    <MenuItem value={"manual"}>manual</MenuItem>
                    <MenuItem value={"auto"}>auto</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {/* プレイヤー2 */}
              <TableCell align="left">プレイヤー2</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="player-type-2-select-label">プレイヤー2</InputLabel>
                  <Select
                    value={playerType2}
                    label="playerType2"
                    onChange={handleChange}
                    name="playerType2"
                  >
                    <MenuItem value={"manual"}>manual</MenuItem>
                    <MenuItem value={"auto"}>auto</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* プレイヤー3 */}
            <TableRow>
              <TableCell align="left">プレイヤー3</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="player-type-3-select-label">プレイヤー3</InputLabel>
                  <Select
                    value={playerType3}
                    label="playerType3"
                    onChange={handleChange}
                    name="playerType3"
                  >
                    <MenuItem value={"manual"}>manual</MenuItem>
                    <MenuItem value={"auto"}>auto</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {/* プレイヤー4 */}
              <TableCell align="left">プレイヤー4</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="player-type-4-select-label">プレイヤー4</InputLabel>
                  <Select
                    value={playerType4}
                    label="playerType4"
                    onChange={handleChange}
                    name="playerType4"
                  >
                    <MenuItem value={"manual"}>manual</MenuItem>
                    <MenuItem value={"auto"}>auto</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* 禁止上がり */}
            <TableRow>
              <TableCell align="left">禁止上がり</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-ban-select-label">禁止上がり</InputLabel>
                  <Select
                    value={isBan}
                    label="isBan"
                    onChange={handleChange}
                    name="isBan"
                  >
                    <MenuItem value={true}>true</MenuItem>
                    {/* <MenuItem value={false}>false</MenuItem> */}
                  </Select>
                </FormControl>
              </TableCell>
              {/* 能力 */}
              <TableCell align="left">能力</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-avility-select-label">能力</InputLabel>
                  <Select
                    value={isAvility}
                    label="isAvility"
                    onChange={handleChange}
                    name="isAvility"
                  >
                    {/* <MenuItem value={true}>true</MenuItem> */}
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* 階段 */}
            <TableRow>
              <TableCell align="left">階段</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-stairs-select-label">階段</InputLabel>
                  <Select
                    value={isStairs}
                    label="isStairs"
                    onChange={handleChange}
                    name="isStairs"
                  >
                    {/* <MenuItem value={true}>true</MenuItem> */}
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {/* スペ3返し */}
              <TableCell align="left">スペ3返し</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-return-spade3-select-label">スペ3返し</InputLabel>
                  <Select
                    value={isReturnSpade3}
                    label="isReturnSpade3"
                    onChange={handleChange}
                    name="isReturnSpade3"
                  >
                    {/* <MenuItem value={true}>true</MenuItem> */}
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* 墓地開示 */}
            <TableRow>
              <TableCell align="left">墓地開示</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-show-die-select-label">墓地開示</InputLabel>
                  <Select
                    value={isShowDie}
                    label="isShowDie"
                    onChange={handleChange}
                    name="isShowDie"
                  >
                    <MenuItem value={true}>true</MenuItem>
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {/* 手札開示 */}
              <TableCell align="left">手札開示</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-show-card-select-label">手札開示</InputLabel>
                  <Select
                    value={isShowCard}
                    label="isShowCard"
                    onChange={handleChange}
                    name="isShowCard"
                  >
                    <MenuItem value={true}>true</MenuItem>
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {/* アクション可能カード開示 */}
            <TableRow>
              <TableCell align="left">アクション可能カード開示</TableCell>
              <TableCell align="left">
                <FormControl fullWidth>
                <InputLabel id="is-show-actionable-card-select-label">アクション可能カード開示</InputLabel>
                  <Select
                    value={isShowActionable}
                    label="isShowActionable"
                    onChange={handleChange}
                    name="isShowActionable"
                  >
                    <MenuItem value={true}>true</MenuItem>
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box mt="30px" ml="40%">
        <Button onClick={()=>btnClick()} variant="contained">Game Start</Button>
      </Box>
    </>
  )
}