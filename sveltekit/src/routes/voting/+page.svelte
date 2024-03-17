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
	

	async function requestAccount() {
		await window.ethereum.request({ method: "eth_requestAccounts" });
	}

	// Create a proposal
	async function createProposal() {
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
				const res = await contract.createProposal("proposal1", "description1");
				console.log("result: ", res);
			} catch (error) {
				console.log("error: ", error);
			}
		}
	}

	// Vote

	// Set proposal required price

	// Be able to vote on proposal
	//user.vote()

</script>

<div class="container mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
        <div class="p-2"/> <!-- space above 1st card-->
		
		<button on:click={requestAccount}>Connect Account</button>
		<button on:click={createProposal}>test</button>

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