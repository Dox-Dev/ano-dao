<script lang="ts">
	import {AnoDAO__factory} from "../../../../typechain-types";
	import type {AnoDAO} from "../../../../typechain-types";
	
	//import useState from 'hooks.js';
	import {ethers} from 'ethers';
	import AnoDAO_json from "../../../../artifacts/contracts/AnoDAO.sol/AnoDAO.json";
	import 'dotenv';

	import {
		PUBLIC_DAO_ADDRESS,
	} from '$env/static/public';

	// The contract address
	const DAO_ADDRESS = PUBLIC_DAO_ADDRESS;
	console.log(DAO_ADDRESS);

	// Property variables
	let title: string = '';
	let description: string = '';
	let proposalID: number;
	let vote: boolean = false;

	async function requestAccount() {
		await window.ethereum.request({ method: "eth_requestAccounts" });
	}

	// Create a proposal
	async function createAProposal() {
		// check if Metamask extension exists
		if(typeof window.ethereum !== "undefined") {
			const provider = await new ethers.BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();
			const contract = new ethers.Contract(
				DAO_ADDRESS, 
				AnoDAO_json.abi,
				signer
			);
			try { // try to create the proposal
				console.log('title: ', title);
				console.log('description: ', description);
				console.log('proposalCounter (before): ', await contract.proposalCounter());

				const res = await contract.createProposal(title, description);
				console.log("result: ", res);

				proposalID = await contract.proposalCounter();
			} catch (error) {
				console.log("error: ", error);
			}
		}
	}

	async function voteOnProposal() {
		if(typeof window.ethereum === "undefined") return;

		const provider = await new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();

		const contract = new ethers.Contract(
				DAO_ADDRESS,
				AnoDAO_json.abi,
				signer
		);

		try {
			console.log("vote: ", vote);
			const res = await contract.vote(proposalID, vote);
			let dao_contract = await contract.proposals(proposalID);
			console.log("title of proposal: ", dao_contract.title);
			console.log("description of proposal: ", dao_contract.description);
		} catch (error) {
			console.log("error: ", error);
		}
	}

	// Vote

	// Set proposal required price

	// Be able to vote on proposal
	//user.vote()

</script>

<form method="POST" class="m-5" on:submit|preventDefault={createAProposal}>
	<h1 class="h1">Create a proposal</h1>
	<label class="label mt-3">
		<span class="h2">Title</span>
		<input name="title" bind:value={title} class="input" type="text" placeholder="Write your title here."/>
	</label>
	<label class="label mt-3">
		<span class="h2">Description</span>
		<textarea name="description" bind:value={description} class="textarea" rows="4" placeholder="Write your description here."/>
	</label>
	<button type="submit" class="btn btn-sm variant-filled mt-2">Submit</button>
</form>

<form method="POST" class="m-5 mt-10" on:submit|preventDefault={voteOnProposal}>
	<h1 class="h1">Vote on a proposal</h1>
	<label class="label mt-3">
		<span class="h2">Proposal ID</span>
		<input name="title" bind:value={proposalID} class="input" type="text" placeholder="Write your title here."/>
	</label>
	<div class="space-y-2 mt-3">
		<span class="h2">Yes/No?</span>
		<label class="flex items-center space-x-2">
			<input bind:group={vote} value={true} class="radio" type="radio" checked name="radio-direct" />
			<p>Yes</p>
		</label>
		<label class="flex items-center space-x-2">
			<input bind:group={vote} value={false} class="radio" type="radio" name="radio-direct" />
			<p>No</p>
		</label>
	</div>
	<button type="submit" class="btn btn-sm variant-filled mt-2">Submit</button>
</form>

<div class="container mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
        <div class="p-2"/> <!-- space above 1st card-->
		
		<!-- <button on:click={requestAccount}>Connect Account</button> -->

		<!-- Card -->
        <div class="card p-4 size-1/2">
            <!-- Question/Proposal -->
            <section class="p-4">Insert proposal here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, maiores! Sunt nulla id dolores ipsam molestiae eos voluptate. Repellendus voluptatibus odit, voluptates at sunt ipsam reiciendis cumque culpa maiores rerum?</section>

            <!-- Options -->
			<footer class="card-footer">
            	<div class="space-y-2">
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" checked name="radio-direct" value="1" />
            			<p>Option 1</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="2" />
            			<p>Option 2</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="3" />
            			<p>Option 3</p>
            		</label>
            	</div>
			</footer>
        </div>
		
		<div class="card p-4 size-1/2">
            <!-- Question/Proposal -->
            <section class="p-4">Insert proposal here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, maiores! Sunt nulla id dolores ipsam molestiae eos voluptate. Repellendus voluptatibus odit, voluptates at sunt ipsam reiciendis cumque culpa maiores rerum?</section>

            <!-- Options -->
			<footer class="card-footer">
            	<div class="space-y-2">
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" checked name="radio-direct" value="1" />
            			<p>Option 1</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="2" />
            			<p>Option 2</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="3" />
            			<p>Option 3</p>
            		</label>
            	</div>
			</footer>
        </div>

		<div class="card p-4 size-1/2">
            <!-- Question/Proposal -->
            <section class="p-4">Insert proposal here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, maiores! Sunt nulla id dolores ipsam molestiae eos voluptate. Repellendus voluptatibus odit, voluptates at sunt ipsam reiciendis cumque culpa maiores rerum?</section>

            <!-- Options -->
			<footer class="card-footer">
            	<div class="space-y-2">
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" checked name="radio-direct" value="1" />
            			<p>Option 1</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="2" />
            			<p>Option 2</p>
            		</label>
            		<label class="flex items-center space-x-2">
            			<input class="radio" type="radio" name="radio-direct" value="3" />
            			<p>Option 3</p>
            		</label>
            	</div>
			</footer>
        </div>

		<div class="p-2"/> <!-- space below last card-->
    </div>
</div>