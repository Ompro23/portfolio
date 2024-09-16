<script>
	import { data, title } from '@data/resume';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
</script>

<CommonPage {title}>
	<div class="resume-container">
		<div class="download-option">
			<a href={data} download>
				<Chip size={'1.25em'}>Download Resume</Chip>
			</a>
		</div>
		<div class="resume">
			{#if data}
				<iframe
					src={`${data}#toolbar=0&navpanes=0&scrollbar=0&zoom=120`}
					title="Resume PDF"
					width="100%"
					height="800px"
				>
					<p>It appears you don't have a PDF plugin for this browser. You can <a href={data}>click here to download the PDF file.</a></p>
				</iframe>
			{:else}
				<p>Oops! No resume available at the moment.</p>
			{/if}
		</div>
	</div>
</CommonPage>

<style lang="scss">
	.resume-container {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.download-option {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;

		a {
			text-decoration: none;
		}
	}

	.resume {
		display: flex;
		justify-content: center;
		width: 100%;

		iframe {
			max-width: 100%;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			border: none;
		}

		p {
			font-size: 1.25em;
			color: #666;
		}
	}
</style>
