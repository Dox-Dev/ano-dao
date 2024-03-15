
<script lang="ts">
	import MetaMask from '$lib/icons/metamask-inverted.svelte';

	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();
	const toastSettings: ToastSettings = {
		message: 'MetaMask wallet has been connected',
		timeout: 5000, // toast hides after 2 seconds
	};

	let userAddress = null;
	async function connectWallet() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
            if(accounts.length > 0) {
                userAddress = accounts[0];

				toastStore.trigger(toastSettings);
            }else{
                alert('No accounts found');
            }
        }else{
            alert('No ethereum wallet found');
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