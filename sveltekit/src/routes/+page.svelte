<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import FistIcon from '$lib/icons/fist.svelte';
	import GroupIcon from '$lib/icons/group.svelte';
	import HandshakeIcon from '$lib/icons/handshake-simple.svelte';
	import PaletteIcon from '$lib/icons/palette.svelte';
	import RocketIcon from '$lib/icons/rocket.svelte';

	import BookOpenIcon from '$lib/icons/book-open.svelte';
	import GlobeIcon from '$lib/icons/globe.svelte';
	import MusicIcon from '$lib/icons/music.svelte';
	import PeopleArrowsIcon from '$lib/icons/people-arrows.svelte';
	import QuestionIcon from '$lib/icons/question-mark.svelte';
</script>

<div class="container h-full mx-auto flex mt-5">
	<div class="flex flex-col">
		<h2 class="h1">AnoDAO?!</h2>
		<h2 class="h2 mt-5 mb-2">The Vision.</h2>

			Imagine a world where blockchain technology transcends boundaries, where decentralized communities flourish, and where “Ano daw?!” becomes a rallying cry for innovation. 
			AnoDAO envisions:
			<dl class="list-dl ml-10">
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><GroupIcon/></span>
					<span class="flex-auto">
						<dt>Inclusivity</dt>
						<dd>We welcome everyone—novices, experts, and dreamers alike—to join our digital agora.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><HandshakeIcon/></span>
					<span class="flex-auto">
						<dt>Transparency</dt>
						<dd>Our governance is crystal clear, like a sunlit beach on a summer day.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><FistIcon/></span>
					<span class="flex-auto">
						<dt>Empowerment</dt>
						<dd>Every member has a seat at the table, shaping the future of AnoDAO.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><PaletteIcon/></span>
					<span class="flex-auto">
						<dt>Playfulness</dt>
						<dd>We embrace curiosity, turning “Ano daw?!” into a catalyst for creativity.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><RocketIcon/></span>
					<span class="flex-auto">
						<dt>Impact</dt>
						<dd>Through collective wisdom, we drive positive change—one smart contract at a time.</dd>
					</span>
				</div>
				<!-- ... -->
			</dl>

		<h2 class="h2 mt-5 mb-2">The Mission.</h2>

			We're not just a DAO; we're a community of seekers, explorers, and builders. Here's how we roll:
			<dl class="list-dl ml-10">
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><QuestionIcon/></span>
					<span class="flex-auto">
						<dt>Question Everything</dt>
						<dd>Ask, ponder, and challenge the status quo.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><GlobeIcon/></span>
					<span class="flex-auto">
						<dt>Decentralized Decision-Making</dt>
						<dd>No top-down mandates here! Our decisions emerge from collective intelligence.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><PeopleArrowsIcon/></span>
					<span class="flex-auto">
						<dt>Creative Collaboration</dt>
						<dd>From NFT art to DeFi protocols, we co-create wonders that make the world go, “Ano daw?!”</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><BookOpenIcon/></span>
					<span class="flex-auto">
						<dt>Educate and Elevate</dt>
						<dd>We're all about learning, sharing, and lifting each other up.</dd>
					</span>
				</div>
				<div>
					<span class="badge bg-primary-500 btn-icon-sm"><MusicIcon/></span>
					<span class="flex-auto">
						<dt>Fun and Funky</dt>
						<dd>Because life's too short for boring DAOs.</dd>
					</span>
				</div>
			</dl>

		<!-- Animated Logo -->
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
