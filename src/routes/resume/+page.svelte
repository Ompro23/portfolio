<script>
	import { resumeImages, title } from '@data/resume';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Card from '$lib/components/Card/Card.svelte';

	const resumeUrl = 'https://drive.google.com/file/d/1yUL4tBuHMteQRBglp_TJWUBYFCEf_h70/view?usp=sharing'; // Replace with your actual resume URL
</script>

<CommonPage {title}>
	<div class="resume-container">
		<div class="download-option">
			<a href={resumeUrl} target="_blank" rel="noopener noreferrer">
				<Chip size={'1.25em'}>Download Resume</Chip>
			</a>
		</div>
		<div class="resume-cards">
			{#each resumeImages as image, index}
				<Card color="#ffffff" classes={['resume-card']}>
					<img src={image} alt={`Resume page ${index + 1}`} />
				</Card>
			{/each}
		</div>
	</div>
</CommonPage>

<style lang="scss">
	.resume-container {
		width: 100%;
		max-width: 1600px; // Increased from 1200px
		margin: 0 auto;
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.download-option {
		margin-bottom: 30px;

		a {
			text-decoration: none;
		}
	}

	.resume-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 30px;
		width: 100%;
	}

	:global(.resume-card) {
		width: 100%;
		max-width: 780px; // Changed from 600px
		overflow: hidden;

		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}

	@media (min-width: 1600px) {
		.resume-cards {
			max-width: 1500px;
		}
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		:global(.resume-card) {
			width: calc(50% - 15px);
		}
	}

	@media (min-width: 768px) and (max-width: 1199px) {
		:global(.resume-card) {
			width: calc(50% - 15px);
			max-width: 600px;
		}
	}

	@media (max-width: 767px) {
		.resume-container {
			padding: 0;
		}

		.resume-cards {
			gap: 20px;
		}
	}
</style>
