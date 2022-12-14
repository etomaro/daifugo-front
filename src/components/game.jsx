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
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import bk0 from '../utils/card_small/bk0.png';
import j1 from '../utils/card_small/j1.png';
import c1 from '../utils/card_small/c1.png';
import c2 from '../utils/card_small/c2.png';
import c3 from '../utils/card_small/c3.png';
import c4 from '../utils/card_small/c4.png';
import c5 from '../utils/card_small/c5.png';
import c6 from '../utils/card_small/c6.png';
import c7 from '../utils/card_small/c7.png';
import c8 from '../utils/card_small/c8.png';
import c9 from '../utils/card_small/c9.png';
import c10 from '../utils/card_small/c10.png';
import c11 from '../utils/card_small/c11.png';
import c12 from '../utils/card_small/c12.png';
import c13 from '../utils/card_small/c13.png';
import d1 from '../utils/card_small/d1.png';
import d2 from '../utils/card_small/d2.png';
import d3 from '../utils/card_small/d3.png';
import d4 from '../utils/card_small/d4.png';
import d5 from '../utils/card_small/d5.png';
import d6 from '../utils/card_small/d6.png';
import d7 from '../utils/card_small/d7.png';
import d8 from '../utils/card_small/d8.png';
import d9 from '../utils/card_small/d9.png';
import d10 from '../utils/card_small/d10.png';
import d11 from '../utils/card_small/d11.png';
import d12 from '../utils/card_small/d12.png';
import d13 from '../utils/card_small/d13.png';
import h1 from '../utils/card_small/h1.png';
import h2 from '../utils/card_small/h2.png';
import h3 from '../utils/card_small/h3.png';
import h4 from '../utils/card_small/h4.png';
import h5 from '../utils/card_small/h5.png';
import h6 from '../utils/card_small/h6.png';
import h7 from '../utils/card_small/h7.png';
import h8 from '../utils/card_small/h8.png';
import h9 from '../utils/card_small/h9.png';
import h10 from '../utils/card_small/h10.png';
import h11 from '../utils/card_small/h11.png';
import h12 from '../utils/card_small/h12.png';
import h13 from '../utils/card_small/h13.png';
import s1 from '../utils/card_small/s1.png';
import s2 from '../utils/card_small/s2.png';
import s3 from '../utils/card_small/s3.png';
import s4 from '../utils/card_small/s4.png';
import s5 from '../utils/card_small/s5.png';
import s6 from '../utils/card_small/s6.png';
import s7 from '../utils/card_small/s7.png';
import s8 from '../utils/card_small/s8.png';
import s9 from '../utils/card_small/s9.png';
import s10 from '../utils/card_small/s10.png';
import s11 from '../utils/card_small/s11.png';
import s12 from '../utils/card_small/s12.png';
import s13 from '../utils/card_small/s13.png';

import human from '../utils/human.png'

const C_ITEMDATA = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13];
const S_ITEMDATA = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
const H_ITEMDATA = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13];
const D_ITEMDATA = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13];
const J_ITEMDATA = [j1];

const C_ITEMDATA_STR = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13"];
const S_ITEMDATA_STR = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13"];
const H_ITEMDATA_STR = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13"];
const D_ITEMDATA_STR = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13"];
const J_ITEMDATA_STR = ["j1"];

// "c1" -> c1
const stringToUndefined = {
  "c1": c1, "c2": c2, "c3": c3, "c4": c4, "c5": c5, "c6": c6, "c7": c7, "c8": c8, "c9": c9, "c10": c10, "c11": c11, "c12": c12, "c13": c13,
  "s1": s1, "s2": s2, "s3": s3, "s4": s4, "s5": s5, "s6": s6, "s7": s7, "s8": s8, "s9": s9, "s10": s10, "s11": s11, "s12": s12, "s13": s13,
  "h1": h1, "h2": h2, "h3": h3, "h4": h4, "h5": h5, "h6": h6, "h7": h7, "h8": h8, "h9": h9, "h10": h10, "h11": h11, "h12": h12, "h13": h13,
  "d1": d1, "d2": d2, "d3": d3, "d4": d4, "d5": d5, "d6": d6, "d7": d7, "d8": d8, "d9": d9, "d10": d10, "d11": d11, "d12": d12, "d13": d13,
  "j1": j1
}

export const Game = (props) => {
  // state

  // ????????????
  const [seNumPlayer, setSeNumPlayer] = useState("");
  const [sePlayerType1, setSePlayerType1] = useState("");
  const [sePlayerType2, setSePlayerType2] = useState("");
  const [sePlayerType3, setSePlayerType3] = useState("");
  const [sePlayerType4, setSePlayerType4] = useState("");
  const [seAutoSpeed, setSeAutoSpeed] = useState("");
  const [seIsBan, setSeIsBan] = useState(true);
  const [seIsAvility, setSeIsAvility] = useState(false);
  const [seIsStairs, setSeIsStairs] = useState(false);
  const [seIsReturnSpade3, setSeIsReturnSpade3] = useState(false);
  const [seIsShowDie, setSeisShowDie] = useState(true);
  const [seIsShowCard, setIsShowCard] = useState(true);
  const [seIsShowActionable, setIsShowActionable] = useState(true);

  const [end1, setEnd1] = useState("");  // 1???
  const [end2, setEnd2] = useState("");  // 2???
  const [end3, setEnd3] = useState("");  // 3???
  const [end4, setEnd4] = useState("");  // 4???
  const [dieCards, setDieCards] = useState([]);  // ???????????????
  const [turn, setTurn] = useState(1);  // turn
  const [lastCard, setLastCard] = useState([]);  // ??????????????????
  const [id1Cards, setId1Cards] = useState([]);  // id1?????????
  const [id2Cards, setId2Cards] = useState([]);  // id2?????????
  const [id3Cards, setId3Cards] = useState([]);  // id3?????????
  const [id4Cards, setId4Cards] = useState([]);  // id4?????????
  const [powerCards, setPowerCards] = useState([]);
  const [lastPlayer, setLastPlayer] = useState("");
  const [revolution, setRevolution] = useState(false);
  const [playersOrder, setPlayersOrder] = useState({});

  const [nextPlayerId, setNextPlayerId] = useState("");  // ????????????????????????ID
  const [nextActionableCards, setNextActionableCards] = useState([]);  // ?????????????????????????????????

  const [nextCpuAction, setNextCpuAction] = useState([])  // ????????????????????????CPU????????????????????????????????????

  const [isAction, setIsAction] = useState(false);  // action????????????????????????
  const [isSkip, setIsSkip] = useState(true);  // skip???????????????????????????
  const [errorText, setErrorText] = useState("");  // error???

  const [checkedCards, setCheckedCards] = useState([])  // checkbox?????????????????????(????????????????????????)

  useEffect(() => {
    // props.data????????????????????????(javascirpt????????????)
    if (Object.keys(props.data).length) {
      setSeNumPlayer(props.settings.num_player);
      setSePlayerType1(props.settings.player_type1);
      setSePlayerType2(props.settings.player_type2);
      setSePlayerType3(props.settings.player_type3);
      setSePlayerType4(props.settings.player_type4);
      setSeAutoSpeed(props.settings.auto_speed);
      setSeIsBan(props.settings.is_ban);
      setSeIsAvility(props.settings.is_avility);
      setSeIsStairs(props.settings.is_stairs);
      setSeIsReturnSpade3(props.settings.is_return_spade3);
      setSeisShowDie(props.settings.isShowDie);
      setIsShowCard(props.settings.isShowCard);
      setIsShowActionable(props.settings.isShowActionable);

      setEnd1(props.data.game_info.end_player["1"]);
      setEnd2(props.data.game_info.end_player["2"]);
      setEnd3(props.data.game_info.end_player["3"]);
      setEnd4(props.data.game_info.end_player["4"]);
      setDieCards(props.data.game_info.die_cards);
      setTurn(props.data.game_info.count);
      setLastCard(props.data.game_info.last_card);
      setId1Cards(props.data.game_info.id1_cards);
      setId2Cards(props.data.game_info.id2_cards);
      setId3Cards(props.data.game_info.id3_cards);
      setId4Cards(props.data.game_info.id4_cards);
      setPowerCards(props.data.game_info.power_cards);
      setLastPlayer(props.data.game_info.last_player);
      setRevolution(props.data.game_info.revolution);
      setPlayersOrder(props.data.game_info.players_order);
      setNextPlayerId(props.data.next_player_id);
      setNextActionableCards(props.data.next_actionable_cards);

      setNextCpuAction(props.data.next_cpu_action);

      // debug??????(??????????????????????????????????????????????????????(shift + @))
      console.log(
        `--debug state--\nend1: ${end1}\nend2: ${end2}\nend3: ${end3}\nend4: ${end4}\nturn: ${turn}\nlastCard: ${lastCard}\nnextPlayerId: ${nextPlayerId}
dieCards: ${dieCards}
id1Cards: ${id1Cards}
id2Cards: ${id2Cards}
id3Cards: ${id3Cards}
id4Cards: ${id4Cards}
nextActionableCards: ${nextActionableCards}`
      );
    }
  }, [props.data])

  // cpu??????????????????
  useEffect(() => {
    if (nextCpuAction.length!==0) {
      // CPU??????????????????
      (async () => {
        const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))
        if (nextCpuAction[0] === "skip") {
          await sleep(0.01);

          skipBtn(nextCpuAction);
        }else {
          await sleep(0.01);

          actionBtn(nextCpuAction);
        }
      })()

    }
  }, [nextCpuAction])

  // backend?????????
	const url = "https://polar-tor-22320.herokuapp.com/play";

  // action button
  const actionBtn = (argCheckedCards) => {
    console.log("action");
    console.log("[??????????????????]action card: ", argCheckedCards)

    setErrorText("");

    const endPlayer = {
      "1": end1,
      "2": end2,
      "3": end3,
      "4": end4
    }

    // ??????????????????????????????(CPU????????????????????????)(useState?????????????????????????????????????????????????????????????????????)
    let action_card = checkedCards;
    if (argCheckedCards !== undefined) {
      action_card = argCheckedCards
    }else {
      // ????????????????????????????????????????????????
      if (!checkActionable()) {
        setErrorText("cardERROR");
        return;
      };

      // ???????????????????????????????????????
      setErrorText("")
    }
    console.log("???: ", checkedCards);
    console.log("???: ", action_card);

    const param = {
      "player_id": nextPlayerId,
      "action_card": action_card,  // ??????????????????Settings
      "num_player": seNumPlayer,
      "player_type1": sePlayerType1,
      "player_type2": sePlayerType2,
      "player_type3": sePlayerType3,
      "player_type4": sePlayerType4,
      "auto_speed": seAutoSpeed,
      "is_ban": seIsBan,
      "is_avility": seIsAvility,
      "is_stairs": seIsStairs,
      "is_return_spade3": seIsReturnSpade3,  // ??????????????????GameInfo
      "power_cards": powerCards,
      "die_cards": dieCards,
      "last_card": lastCard,
      "last_player": lastPlayer,
      "count": turn,
      "revolution": revolution,
      "end_player": endPlayer,
      "players_order": playersOrder,
      "id1_cards": id1Cards,
      "id2_cards": id2Cards,
      "id3_cards": id3Cards,
      "id4_cards": id4Cards
    };

    console.log("/play: POST ????????????????????????????????????");
    for (let [key, value] of Object.entries(param)) {
      console.log(key + ': ' + value + ': ' + typeof value);
    }

    axios({
      method: 'post',
      url: url,
      data: param,
      headers: {"content-type": "application/json"},
    })
    .then(response => {
        console.log(response);
        setEnd1(response.data.game_info.end_player["1"]);
        setEnd2(response.data.game_info.end_player["2"]);
        setEnd3(response.data.game_info.end_player["3"]);
        setEnd4(response.data.game_info.end_player["4"]);
        setDieCards(response.data.game_info.die_cards);
        setTurn(response.data.game_info.count);
        setLastCard(response.data.game_info.last_card);
        setId1Cards(response.data.game_info.id1_cards);
        setId2Cards(response.data.game_info.id2_cards);
        setId3Cards(response.data.game_info.id3_cards);
        setId4Cards(response.data.game_info.id4_cards);
        setPowerCards(response.data.game_info.power_cards);
        setLastPlayer(response.data.game_info.last_player);
        setRevolution(response.data.game_info.revolution);
        setPlayersOrder(response.data.game_info.players_order);
        setNextPlayerId(response.data.next_player_id);
        setNextActionableCards(response.data.next_actionable_cards);
        setNextCpuAction(response.data.next_cpu_action);

        // check?????????????????????
        setCheckedCards([]);
        // cpu??????????????????????????????????????????????????????????????????
        if (response.data.next_cpu_action.length !== 0) {
          setIsAction(false);
          setIsSkip(false);
        }else {
          setIsAction(false);
          setIsSkip(true);
        }
    })
    .catch(error => {
        console.log("error: ", error);
        setErrorText("ERROR!!");
    });
  }

  // skip button
  const skipBtn = (argCheckedCards) => {
    console.log("skip");
  
    setErrorText("");

    const endPlayer = {
      "1": end1,
      "2": end2,
      "3": end3,
      "4": end4
    }

    // ??????????????????????????????(CPU????????????????????????)(useState?????????????????????????????????????????????????????????????????????)
    let action_card = ["skip"];
    if (argCheckedCards !== undefined) {
      action_card = argCheckedCards
    }

    const param = {
      "player_id": nextPlayerId,
      "action_card": action_card,  // ??????????????????Settings
      "num_player": seNumPlayer,
      "player_type1": sePlayerType1,
      "player_type2": sePlayerType2,
      "player_type3": sePlayerType3,
      "player_type4": sePlayerType4,
      "auto_speed": seAutoSpeed,
      "is_ban": seIsBan,
      "is_avility": seIsAvility,
      "is_stairs": seIsStairs,
      "is_return_spade3": seIsReturnSpade3,  // ??????????????????GameInfo
      "power_cards": powerCards,
      "die_cards": dieCards,
      "last_card": lastCard,
      "last_player": lastPlayer,
      "count": turn,
      "revolution": revolution,
      "end_player": endPlayer,
      "players_order": playersOrder,
      "id1_cards": id1Cards,
      "id2_cards": id2Cards,
      "id3_cards": id3Cards,
      "id4_cards": id4Cards
    };

    console.log("/play: POST ????????????????????????????????????");
    for (let [key, value] of Object.entries(param)) {
      console.log(key + ': ' + value + ': ' + typeof value);
    }

    axios({
      method: 'post',
      url: url,
      data: param,
      headers: {"content-type": "application/json"},
    })
    .then(response => {
        console.log(response);
        setEnd1(response.data.game_info.end_player["1"]);
        setEnd2(response.data.game_info.end_player["2"]);
        setEnd3(response.data.game_info.end_player["3"]);
        setEnd4(response.data.game_info.end_player["4"]);
        setDieCards(response.data.game_info.die_cards);
        setTurn(response.data.game_info.count);
        setLastCard(response.data.game_info.last_card);
        setId1Cards(response.data.game_info.id1_cards);
        setId2Cards(response.data.game_info.id2_cards);
        setId3Cards(response.data.game_info.id3_cards);
        setId4Cards(response.data.game_info.id4_cards);
        setPowerCards(response.data.game_info.power_cards);
        setLastPlayer(response.data.game_info.last_player);
        setRevolution(response.data.game_info.revolution);
        setPlayersOrder(response.data.game_info.players_order);
        setNextPlayerId(response.data.next_player_id);
        setNextActionableCards(response.data.next_actionable_cards);
        setNextCpuAction(response.data.next_cpu_action);

        // check?????????????????????
        setCheckedCards([]);
        // cpu??????????????????????????????????????????????????????????????????
        if (response.data.next_cpu_action.length !== 0) {
          setIsAction(false);
          setIsSkip(false);
        }else {
          setIsAction(false);
          setIsSkip(true);
        }
    })
    .catch(error => {
        console.log("error: ", error);
        setErrorText("axiosERROR!!");
    });
  }

  // ????????????????????????????????????????????????
  const checkActionable = () => {
    // ?????????????????????????????????????????????????????????
    const actionLength = checkedCards.length
    if (actionLength === 1) {
      // 1?????????
      if (nextActionableCards.includes(checkedCards[0])) {
        // ?????????????????????
        return true
      }else {
        // ????????????????????????
        return false
      }
    }else {
      // 1???????????????
      // ?????????????????????????????????????????? ?????? checkedCards??????????????????nextActionableCards?????????????????????(???????????????????????????)
      let isOk = false;
      let isAllExist = false;
      nextActionableCards.forEach((item) => {
        isAllExist = false;
        // ??????????????????????????????????????????(javascript???forEach??????return????????????????????????)
        if (typeof item === "string") {
          return;
        }
        // ???????????????????????????????????????
        if (item.length !== actionLength) {
          return;
        }

        // js???break????????????????????????(????????????????????????)
        let isBreak = false
        item.forEach((item_card) => {
          if (isBreak) {
            // break????????????true???????????????skip->break?????????
            return;
          }
          // ???????????????(????????????????????????????????????false?????????)
          if (checkedCards.includes(item_card)) {
            isAllExist = true
          }else {
            // ?????????????????????
            isAllExist = false
            isBreak = true
          }
        })
        // ??????
        if (isAllExist) {
          isOk = true
        }else {
          return;
        }
      })
      return isOk
    }
  }

  //  ??????????????????????????????-????????????
  const DesignActionable = () => {
    let text = ""
    for (let item of nextActionableCards) {
      if (typeof item === "object") {
        text += "["
        text += item
        text += "], "
      }else {
        text += item
        text += ", "
      }
    }

    const result = 
      <Box sx={{ width: 300, height: 18 }} mt="20px" >
        {text}
      </Box>
    return result
  }

  // checkbox???????????????????????????
  const btnCheckBox = (event) => {
    const a = {"1": bk0};
    console.log(a["1"]);
    console.log(String(a['1']));
    // ??????????????????????????????
    // ????????????????????????(check???????????????)
    if (checkedCards.includes(event.target.value)) {
      // ????????????????????????
      const newArray = checkedCards.filter(item => item !== event.target.value);
      setCheckedCards(newArray);

      // ???????????????????????????????????????SKIP????????????????????????????????????
      if (newArray.length === 0) {
        setIsAction(false);
        setIsSkip(true);
      }
    }else {
      // ?????????????????????(Object????????????????????????????????????????????????????????????????????????????????????set?????????????????????????????????)
      let newArray = checkedCards.slice(0);  // ?????????
      newArray.push(event.target.value);
      setCheckedCards(newArray);
      // ???????????????????????????????????????????????????
      setIsSkip(false);
      setIsAction(true);
    }
  }

  return (
    <>
      <Grid container justify="center" width="100%">
        {/* ??????????????? */}
        <Grid item width="70%">
          {/* ID3 */}
          <Grid container alignItems="center" justify="center" ml="35%" width="500px">
            <Grid item height="110px">
              {nextPlayerId=="id3"
                ?
                <Box item border={2} borderColor="red"><img width="100" height="100" src={human}/></Box>
                :
                <Box><img width="100" height="100" src={human}/></Box>
              }
            </Grid>
            <Grid item>
              <Box ml="10px">ID3{sePlayerType3 === "auto" ? "(CPU)" : "(HUMAN)"}</Box>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center" ml="21%">
            {/* ????????????=false and cpu??????????????????????????? */}
            {
              (seIsShowCard===false && sePlayerType3==="auto")
              ?
                id3Cards.map((card) => (
                  <Grid item>
                    <Checkbox 
                      style={{
                        width: 35,
                        height: 35
                      }}
                      disabled={nextPlayerId!=="id3"}
                      icon={<img src={bk0} alt="??????????????????" width="35" height="35"/>}
                      checkedIcon={<img src={bk0} alt="??????????????????" width="35" height="35" border="3" />}
                      value={card}
                      name="checkid3"
                      onChange={btnCheckBox}
                      checked={checkedCards.includes(card)}
                    />
                  </Grid>
                ))
              :
                id3Cards.map((card) => (
                  <Grid item>
                    <Checkbox 
                      style={{
                        width: 35,
                        height: 35
                      }}
                      disabled={nextPlayerId!=="id3"}
                      icon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35"/>}
                      checkedIcon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35" border="3" />}
                      value={card}
                      name="checkid3"
                      onChange={btnCheckBox}
                      checked={checkedCards.includes(card)}
                    />
                  </Grid>
                ))
            }
          </Grid>
          {/* ID2, ??????, ID4 */}
          <Grid container alignItems="center" ml="4%" height="455px" width="970px">
            {/* ID2 */}
            <Grid item>
            <Grid container alignItems="center" justify="center" width="150px">
              <Grid item width="110px">
              {nextPlayerId=="id2"
                ?
                <Box item border={2} borderColor="red"><img width="100" height="100" src={human} /></Box>
                :
                <Box item><img width="100" height="100" src={human} /></Box>
              }
              <Box pl="35px">ID2</Box>
              {
                  sePlayerType2 === "auto"
                    ? <Box pl="25px">(CPU)</Box>
                    : <Box pl="15px">(HUMAN)</Box>
                }
              </Grid>
              <Grid item>
              {/* ????????????=false and cpu??????????????????????????? */}
              {
                (seIsShowCard===false && sePlayerType2==="auto")
                ?
                  id2Cards.map((card) => (
                    <Grid container>
                      <Grid item transform="90deg">
                        <Checkbox 
                          style={{
                            width: 35,
                            height: 35
                          }}
                          disabled={nextPlayerId!=="id2"}
                          icon={<img src={bk0} alt="??????????????????" width="35" height="35"/>}
                          checkedIcon={<img src={bk0} alt="??????????????????" width="35" height="35" border="3" />}
                          value={card}
                          name="checkid2"
                          onChange={btnCheckBox}
                          checked={checkedCards.includes(card)}
                        />
                      </Grid>
                    </Grid>
                  ))
                :
                  id2Cards.map((card) => (
                    <Grid container>
                      <Grid item transform="90deg">
                        <Checkbox 
                          style={{
                            width: 35,
                            height: 35
                          }}
                          disabled={nextPlayerId!=="id2"}
                          icon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35"/>}
                          checkedIcon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35" border="3" />}
                          value={card}
                          name="checkid2"
                          onChange={btnCheckBox}
                          checked={checkedCards.includes(card)}
                        />
                      </Grid>
                    </Grid>
                  ))
              }
              </Grid>
            </Grid>
            </Grid>
            {/* ??????????????? */}
            <Grid item width="260px"> 
                <Box pr="40px" pb="5px" textAlign={"right"} fontSize="20px">tern: {turn}</Box>
                  <Box textAlign={"right"} pr="40px">
                    {lastCard.length === 0 && <img src={bk0} alt="??????????????????" width="60" height="60"/>}
                    {lastCard.length === 1 && <img src={stringToUndefined[lastCard[0]]} alt="??????????????????" width="60" height="60"/>}
                    {lastCard.length === 2 && 
                      <Box>
                        <img src={stringToUndefined[lastCard[0]]} alt="??????????????????" width="30" height="50"/>
                        <img src={stringToUndefined[lastCard[1]]} alt="??????????????????" width="30" height="50"/>
                      </Box>
                    }
                    {lastCard.length === 3 && 
                      <Box>
                        <img src={stringToUndefined[lastCard[0]]} alt="??????????????????" width="20" height="40"/>
                        <img src={stringToUndefined[lastCard[1]]} alt="??????????????????" width="20" height="40"/>
                        <img src={stringToUndefined[lastCard[2]]} alt="??????????????????" width="20" height="40"/>
                      </Box>
                    }
                    {lastCard.length === 4 && 
                      <Box>
                        <img src={stringToUndefined[lastCard[0]]} alt="??????????????????" width="15" height="30"/>
                        <img src={stringToUndefined[lastCard[1]]} alt="??????????????????" width="15" height="30"/>
                        <img src={stringToUndefined[lastCard[2]]} alt="??????????????????" width="15" height="30"/>
                        <img src={stringToUndefined[lastCard[3]]} alt="??????????????????" width="15" height="30"/>
                      </Box>
                    }
                    {lastCard.length === 5 && 
                      <Box>
                        <img src={stringToUndefined[lastCard[0]]} alt="??????????????????" width="12" height="30"/>
                        <img src={stringToUndefined[lastCard[1]]} alt="??????????????????" width="12" height="30"/>
                        <img src={stringToUndefined[lastCard[2]]} alt="??????????????????" width="12" height="30"/>
                        <img src={stringToUndefined[lastCard[3]]} alt="??????????????????" width="12" height="30"/>
                        <img src={stringToUndefined[lastCard[4]]} alt="??????????????????" width="12" height="30"/>
                      </Box>
                    }
                  </Box>
              {/* ?????? */}
              <Box pr="50px" pt="10px" textAlign={"right"}>??????</Box>
              <Box disabled={true} color="red" textAlign={"right"} pr="35px">{errorText}</Box>
              {
                revolution && <Box disabled={true} color="blue" textAlign={"right"} pr="45px" fontSize="20px">?????????</Box>
              }
            </Grid>
            {/* ????????? */}
            <Grid item width="230px">
              <Box mb="10px">
                <Button onClick={()=>actionBtn()} disabled={!isAction} variant="contained" size="small" color="error">action</Button>
              </Box>
              <Box>
                <Button onClick={()=>skipBtn()} disabled={!isSkip} variant="contained" size="small">skip</Button>
              </Box>
            </Grid>
            {/* ID4 */}
            <Grid item>
            <Grid container alignItems="center" justify="center" width="150px">
              <Grid item>
              {/* ????????????=false and cpu??????????????????????????? */}
              {
                (seIsShowCard===false && sePlayerType4==="auto")
                ?
                  id4Cards.map((card) => (
                    <Grid container>
                      <Grid item transform="90deg">
                        <Checkbox 
                          style={{
                            width: 35,
                            height: 35
                          }}
                          disabled={nextPlayerId!=="id4"}
                          icon={<img src={bk0} alt="??????????????????" width="35" height="35"/>}
                          checkedIcon={<img src={bk0} alt="??????????????????" width="35" height="35" border="3" />}
                          value={card}
                          name="checkid4"
                          onChange={btnCheckBox}
                          checked={checkedCards.includes(card)}
                        />
                      </Grid>
                    </Grid>
                  ))
                :
                  id4Cards.map((card) => (
                    <Grid container>
                      <Grid item transform="90deg">
                        <Checkbox 
                          style={{
                            width: 35,
                            height: 35
                          }}
                          disabled={nextPlayerId!=="id4"}
                          icon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35"/>}
                          checkedIcon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35" border="3" />}
                          value={card}
                          name="checkid4"
                          onChange={btnCheckBox}
                          checked={checkedCards.includes(card)}
                        />
                      </Grid>
                    </Grid>
                  ))
              }
              </Grid>
              <Grid item>
                {nextPlayerId=="id4"
                  ?
                  <Box border={2} borderColor="red"><img width="100" height="100" src={human} /></Box>
                  :
                  <Box><img width="100" height="100" src={human} /></Box>
                }
                <Box pl="35px">ID4</Box>
                {
                  sePlayerType4 === "auto"
                    ? <Box pl="25px">(CPU)</Box>
                    : <Box pl="15px">(HUMAN)</Box>
                }
              </Grid>
            </Grid>
            </Grid>
          </Grid>
          {/* ID1 */}
          <Grid container alignItems="center" justify="center" ml="19%" width="500px">
            {/* ????????????=false and cpu??????????????????????????? */}
            {
              (seIsShowCard===false && sePlayerType1==="auto")
              ?
                id1Cards.map((card) => (
                  <Grid item>
                    <Checkbox 
                      style={{
                        width: 35,
                        height: 35
                      }}
                      disabled={nextPlayerId!=="id1"}
                      icon={<img src={bk0} alt="??????????????????" width="35" height="35"/>}
                      checkedIcon={<img src={bk0} alt="??????????????????" width="35" height="35" border="3" />}
                      value={card}
                      name="checkid1"
                      onChange={btnCheckBox}
                      checked={checkedCards.includes(card)}
                    />
                  </Grid>
                ))
              :
                id1Cards.map((card) => (
                  <Grid item>
                    <Checkbox 
                      style={{
                        width: 35,
                        height: 35
                      }}
                      disabled={nextPlayerId!=="id1"}
                      icon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35"/>}
                      checkedIcon={<img src={stringToUndefined[card]} alt="??????????????????" width="35" height="35" border="3" />}
                      value={card}
                      name="checkid1"
                      onChange={btnCheckBox}
                      checked={checkedCards.includes(card)}
                    />
                  </Grid>
                ))
            }
          </Grid>
          <Grid container alignItems="center" justify="center" ml="35%">
            <Grid item>
              {nextPlayerId=="id1"
                ?
                <Box border={2} borderColor="red"><img width="100" height="100" src={human}/></Box>
                :
                <Box><img width="100" height="100" src={human}/></Box>
              }
            </Grid>
            <Grid item>
              <Box ml="10px">ID1{sePlayerType1 === "auto" ? "(CPU)" : "(HUMAN)"}</Box>
            </Grid>
          </Grid>
        </Grid>
        {/* ??????????????? */}
        <Grid item width="30%" height="100%">
          {/* ?????? */}
          <Box mt="100px" mb="50px">
            <Box sx={{ borderBottom: 1}} width="35px">??????</Box>
            <Box>1???: {end1}</Box>
            <Box>2???: {end2}</Box>
            <Box>3???: {end3}</Box>
            <Box>4???: {end4}</Box>
          </Box>
          {/* ?????????????????? */}
          {
            seIsShowDie &&
              <Box mb="50px">
                <Box sx={{ borderBottom: 1}} width="100px">??????????????????</Box>
                {/* ??????????????? */}
                <ImageList cols={13} sx={{ width: 300, height: 18 }}>
                  {C_ITEMDATA_STR.map((item) => (
                    dieCards.includes(item)
                    ? <Box><img src={bk0} alt="??????????????????" /></Box>
                    : <Box><img src={stringToUndefined[item]} alt="??????????????????" /></Box>
                  ))}
                </ImageList>
                {/* ???????????? */}
                <ImageList cols={13} sx={{ width: 300, height: 18 }}>
                  {S_ITEMDATA_STR.map((item) => (
                    dieCards.includes(item)
                    ? <Box><img src={bk0} alt="??????????????????" /></Box>
                    : <Box><img src={stringToUndefined[item]} alt="??????????????????" /></Box>
                  ))}
                </ImageList>
                {/* ????????? */}
                <ImageList cols={13} sx={{ width: 300, height: 18 }}>
                  {H_ITEMDATA_STR.map((item) => (
                    dieCards.includes(item)
                    ? <Box><img src={bk0} alt="??????????????????" /></Box>
                    : <Box><img src={stringToUndefined[item]} alt="??????????????????" /></Box>
                  ))}
                </ImageList>
                {/* ????????? */}
                <ImageList cols={13} sx={{ width: 300, height: 18 }}>
                  {D_ITEMDATA_STR.map((item) => (
                    dieCards.includes(item)
                    ? <Box><img src={bk0} alt="??????????????????" /></Box>
                    : <Box><img src={stringToUndefined[item]} alt="??????????????????" /></Box>
                  ))}
                </ImageList>
                {/* joker */}
                <ImageList cols={13} sx={{ width: 300, height: 18 }}>
                  {J_ITEMDATA_STR.map((item) => (
                    dieCards.includes(item)
                    ? <Box><img src={bk0} alt="??????????????????" /></Box>
                    : <Box><img src={stringToUndefined[item]} alt="??????????????????" /></Box>
                  ))}
                </ImageList>
              </Box>
          }
          {/* ?????????????????????????????? */}
          {
            seIsShowActionable &&
              <Box>
                <Box sx={{ borderBottom: 1}} width="180px">?????????????????????????????????</Box>
                <DesignActionable />
              </Box>
          }
        </Grid>
      </Grid>
    </>
  )
}


