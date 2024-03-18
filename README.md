# ano-dao

## What it is

AnoDAO is a simple DAO website making use of Solidity, Hardhat, Sveltekit, and Vercel to interact with the Arbitrum Sepolia blockchain (which is a testing environment for Arbitrum-based contracts). The core functionalities of a DAO were taken into account, such as:
- Creating proposals
- Viewing proposals
- Voting on proposals
- Setting the proposal's required bid for voting (only the owner can do this)


## What the setup looks like

First, we need to run `pnpm install` in both the root directory and the `sveltekit/` subdirectory. This would ensure that we have loaded and installed all the dependencies needed to make our website work. 

Next, setup our `.env` file to be located in the root folder of the repository. The environment variables to be placed here would look like what's contained in `.env.example`.
```env
ARBITRUM_SEPOLIA_URL="https://rpc.endpoint" # sample endpoint, look here https://chainlist.org/chain/421614 
WALLET_PRIVATE_KEY="0123456789abcdefghijklmnopqr" # check private key in MetaMask
PUBLIC_TOKEN_ADDRESS="" # address of deployed token in Arbitrum Sepolia
PUBLIC_DAO_ADDRESS="" # address of deployed DAO in Arbitrum Sepolia
```

Afterwards, go back to the root directory because we need to compile our `AnoDAO` and `AnoTher` contracts. These Solidity contracts (`AnoDAO.sol` and `AnoTher.sol`, which are located in the root directory of the repository, are there to be compiled via `pnpm hhcompile` which is defined in the root's `package.json` file. After compiling said contracts, new directories `artifacts` and `typechain-types` would appear containing the functionality and ABI for said contracts. 

Next, in the `sveltekit/` subdirectory, we can run `pnpm dev` to test the website and see if it's working and functional. If the website proves to be satisfactory, run `vite build` to build our website. Our website should be locally deployed now. 


## What the deployment looks like

The setup explained earlier can all be done in [Vercel](https://vercel.com). First, assuming we already made a Vercel account, we need to install Vercel in our `ano-dao` project repository and import said project repository to the Vercel dashboard. 

Next, we want to ensure that a few settings of our deployment would follow how our local setup looks like. To do this, go to the `Settings/General` tab located in the Vercel page of our deployment connected to the project repository. The succeeding steps will be enumerated below:
1. Go to the Build and Development Settings part of the settings.
2. Ensure that the Framework preset is set to `Sveltekit (v1)`.
3. Override the build command to be `cd .. && pnpm hhcompile && cd sveltekit && vite build`
4. Override the install command to be `cd .. && pnpm install && cd sveltekit && pnpm install`
5. Go to the Root Directory part of the settings.
6. Ensure that the set root directory is the `sveltekit` directory.
7. Enable the `Include source files outside of the Root Directory in the Build Step` option to allow the website code to see the Hardhat generated files.

Lastly, go to `Settings/Environment` and input your environment variables. Note that you can input them one-by-one or give a `.env` file that would be parsed by Vercel. These are essential to making everything work with your setup.

Now, just go to the `Deployments` page of Vercel and deploy it. Wait for it to deploy (it should take about less than a minute), and connect to your website. Now, you have a fully functional, simple DAO website!
