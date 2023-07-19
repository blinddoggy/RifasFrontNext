import { ethers } from 'ethers';
import contractAbi from '../utils/rifas.json';


let contract: ethers.Contract;
let ethereum;

/**
 * This function returns the Ethereum instance from the window object if it exists, otherwise it throws
 * an error.
 * @returns The function `getEthereumInstance` returns a Promise that resolves to the `ethereum` object
 * from the window object. If the `ethereum` object doesn't exist, it throws an error message.
 */
export const getEthereumInstance = async () => {
	if (!ethereum) {
		ethereum = window.ethereum;
		if (!ethereum) {
			throw "Ethereum object doesn't exist!";
		}
	}

	return ethereum;
};

/**
 * The function connects to a user's Ethereum wallet and returns their account address.
 * @returns The function `connectWallet` returns the first account from the array of accounts obtained
 * after requesting access to the user's Ethereum wallet through the `eth_requestAccounts` method.
 */
export const connectWallet = async () => {
	try {
		const ethereum = await getEthereumInstance();
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		return accounts[0];
	} catch (error) {
		console.error(error);
	}
};

/**
 * This function creates an instance of an Ethereum contract using its address and returns it.
 * @param {string} contractAddress - The Ethereum address of the smart contract that you want to
 * interact with.
 * @returns The `createContract` function returns an instance of the `ethers.Contract` class, which is
 * created using the provided `contractAddress` and the `PropertyToken.abi` interface. The returned
 * contract instance is connected to the Ethereum network using the `ethereum` instance obtained from
 * the `getEthereumInstance` function, and is also connected to a signer obtained from the `provider`
 * object
 */
export const createContract = async (contractAddress: string) => {
	const ethereum = await getEthereumInstance();

	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();

	if (!contract) {
		contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
	}
	return { contract, provider };
};

/**
 * This TypeScript function retrieves the owner of a smart contract given its address.
 * @param {string} contractAddress - A string representing the address of a smart contract on the
 * blockchain.
 * @returns The function `getOwner` returns a Promise that resolves to a string representing the owner
 * of a smart contract deployed at the specified `contractAddress`. If an error occurs during the
 * execution of the function, it will be caught and logged to the console.
 */
export const buy = async (contractAddress: string) => {
	try {
		const { contract } = await createContract(contractAddress);
		if (contract) {
			const buyAndMint = await contract.buyAndMint();
			return buyAndMint;
		}
	} catch (error) {
		console.error(error);
	}
};




