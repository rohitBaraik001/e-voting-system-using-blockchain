import Web3 from "web3/dist/web3.min.js";
import { accountAction, eVoteAction } from "../Api/action";
import Evote from "../build/contracts/Evote.json";
export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
export const loadBlockchainData = async (dispatch) => {
  //setLoading(true);
  const web3 = window.web3;
  // Load account
  const accounts = await web3.eth.getAccounts();

  dispatch(accountAction(accounts[0]));
  // Network ID
  const networkId = await web3.eth.net.getId();
  // Network data

  if (networkId) {
    const eVote = new web3.eth.Contract(
      Evote.abi,
      Evote.networks[networkId].address
    );
    dispatch(eVoteAction(eVote));
  } else {
    alert("not deployed");
  }
};
