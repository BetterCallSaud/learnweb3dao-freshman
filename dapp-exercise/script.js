window.ethereum.enable();

var provider = new ethers.providers.Web3Provider(
	web3.currentProvider,
	"ropsten"
);
var MoodContractAddress = "0xEBE49fe7535DA317456951Bb99A97ae58b564533";
var MoodContractABI = [
	{
		inputs: [],
		name: "getMood",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_mood",
				type: "string",
			},
		],
		name: "setMood",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
var MoodContract;
var signer;

provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
        MoodContractAddress,
        MoodContractABI,
        signer
    );
});

async function getMood() {
    getMoodPromise = MoodContract.getMood();
    var mood = await getMoodPromise;
    document.getElementById('moodValue').innerText = mood;
}

async function setMood() {
    let mood = document.getElementById("mood").value;
    setMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
    getMood();
}