const { hexStripZeros } = require("ethers/lib/utils");

const main = async() => {

    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to ", waveContract.address);
    console.log("Contract deployed by ",owner.address);

    await waveContract.yourWorldisFullofLove();
    const waveFn = await waveContract.sendingLove();
    await waveFn.wait();
    await waveContract.yourWorldisFullofLove();    

    await waveContract.yourWorldisFullofLove();
    const secondWaveFn = await waveContract.connect(randomPerson).sendingLove();
    await secondWaveFn.wait();
    await waveContract.yourWorldisFullofLove();


}


const runMain = async() =>{

try {

    await main();
    process.exit(0);


} catch (error) {
    console.log(error);
    process.exit(1);
}

}


runMain();