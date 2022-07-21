import React,{useEffect,useState} from "react";
import "./App.css";

const App = () => {
	const [walletAddress,setWalletAddress]=useState(null);
	const checkifWalletIsConnected= async()=>{
		try{
			const {solana}=window
			if(solana){
				if(solana.isPhantom){
					console.log('Phantom wallet found');
					const response= await solana.connect({
						onlyIfTrusted:true,
					});
					setWalletAddress(response.publicKey.toString());
					console.log(`Connected with public key ${response.publicKey.toString()}`)
				}else{
					alert('Solana object not found')
				}
			}
		}
		catch(error){
			console.error(error);
		}
	}
	const connectWallet=async()=>{
		const {solana}= window
		if(solana){
			const response=await solana.connect();
			console.log(`Connected with public key ${response.publicKey.toString()}`)
			setWalletAddress(response.publicKey.toString());
		}
	}
	const renderNotConnectedWallet=()=>(
		<button className="cta-button connect-wallet-button " onClick={connectWallet}>
			Connect to Wallet
		</button>
	)
	useEffect(() => {
	  const onload=async()=>{
		await checkifWalletIsConnected();
	  };
	  window.addEventListener('load',onload);
	  return ()=> window.removeEventListener('load',onload);
	}, [])
	
	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<p className="header">🍭 Candy Drop</p>
					<p className="sub-text">NFT drop machine with fair mint</p>
					{!walletAddress && renderNotConnectedWallet()}
				</div>
			</div>
		</div>
	);
};

export default App;
