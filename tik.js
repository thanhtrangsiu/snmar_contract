let Crowns = artifacts.require("CrownsToken");
let crowns;

let ether = 100000000000000000;

module.exports = async function(callback) {
    let res = await init();

    callback(null, res);
};

let init = async function() {

    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const networkId = await web3.eth.net.getId();
    //let amount = web3.utils.toWei("100000", "ether");

    let crowns = await Crowns.at("0x6fc9651f45B262AE6338a701D563Ab118B1eE0Ce");
    let bridge    = "0x48A6fc66512D45006FC0426576c264D03Dfda304";
    console.log("Crowns address: "+crowns.address);

    console.log("Attemping to add bridge...");
    let bridgeAdded = await crowns.addBridge(bridge).catch(console.error);
    console.log("Bridge added");

  
    return;

    console.log("Approve to burn...");
    let approve = await crowns.approve(accounts[0], mintAmount).catch(console.error);
    console.log("crowns approved to be burnt");

    console.log("Burning tokens...");
    let crownsBurnt = await crowns.burnFrom(accounts[0], mintAmount).catch(console.error);
    console.log("crowns burnt");

    return;

   
    let sender = accounts[0];
    console.log(`checking balance at ${sender}`);
    let balance = parseInt(await crowns.balanceOf(sender))/ether;
    console.log(`balance is ${balance} CWS`);

    sender = accounts[1];
    console.log(`checking balance at ${sender}`);
    balance = parseInt(await crowns.balanceOf(sender))/ether;
    console.log(`balance is ${balance} CWS`);
