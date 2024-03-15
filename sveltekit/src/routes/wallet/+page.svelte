
<script lang="ts">
	import MetaMask from '$lib/icons/metamask-inverted.svelte';

	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();
	const successToast: ToastSettings = {
		message: 'MetaMask wallet has been connected.',
		background: 'variant-filled-primary',
	};
	const noWalletToast: ToastSettings = {
		message: 'There doesn\'t seem to be any wallet extension installed.',
		background: 'variant-filled-primary',
	}

	import {ethers} from 'ethers';

	async function connectWallet() {
		let signer = null;
		let provider;
		
		if (window.ethereum == null) {
		
		    // If MetaMask is not installed, we use the default provider,
		    // which is backed by a variety of third-party services (such
		    // as INFURA). They do not have private keys installed,
		    // so they only have read-only access
		    console.log("MetaMask not installed; using read-only defaults")
		    provider = ethers.getDefaultProvider()

			toastStore.trigger(noWalletToast);
		
		} else {
		
		    // Connect to the MetaMask EIP-1193 object. This is a standard
		    // protocol that allows Ethers access to make all read-only
		    // requests through MetaMask.
		    provider = new ethers.BrowserProvider(window.ethereum)
		
		    // It also provides an opportunity to request access to write
		    // operations, which will be performed by the private key
		    // that MetaMask manages for the user.
		    signer = await provider.getSigner();
		
			toastStore.trigger(successToast);
		}
    }

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">

        <div class="card">
        	<section class="p-4">Here is where you will connect your Arbitrum Sepolia Wallet.</section>
        	<footer class="card-footer">
				<button type="button" class="btn variant-filled-primary" on:click={connectWallet}>
					<span><MetaMask/></span>
					<span>Connect Wallet</span>
				</button>
			</footer>
        </div>

	</div>
</div>