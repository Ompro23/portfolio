<script lang="ts">
    import Card from '$lib/components/Card/Card.svelte';
    import Chip from '$lib/components/Chip/Chip.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    import SearchPage from '$lib/components/SearchPage.svelte';
    import { getAssetURL } from '$lib/data/assets';

    import { title, certificates } from '@data/certificate';
    import type { Certificate } from '$lib/data/certificate';

    let search = '';
    let result: Array<Certificate> = certificates;
    let selectedCertificate: Certificate | null = null;

    const onSearch = (ev: CustomEvent<{ search: string }>) => {
        const s = ev.detail.search.toLowerCase();
        result = certificates.filter((cert) => 
            cert.name.toLowerCase().includes(s) ||
            cert.issuer.toLowerCase().includes(s) ||
            cert.description.toLowerCase().includes(s)
        );
    };

    const openModal = (certificate: Certificate) => {
        selectedCertificate = certificate;
    };

    const closeModal = () => {
        selectedCertificate = null;
    };
</script>

<SearchPage {title} {search} on:search={onSearch}>
    <div class="col items-center relative mt-10 flex-1">
        {#if result.length === 0}
            <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
                <UIcon icon="i-carbon-certificate" classes="text-3.5em" />
                <p class="font-300">No certificates found...</p>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {#each result as certificate}
                    <Card classes={["cursor-pointer", "h-full"]} on:click={() => openModal(certificate)}>
                        <img src={getAssetURL(certificate.image)} alt={certificate.name} class="w-full h-48 object-cover mb-4" />
                        <h2 class="text-xl font-semibold mb-2">{certificate.name}</h2>
                        <p class="text-[var(--secondary-text)] mb-2">{certificate.issuer}</p>
                        <div class="flex justify-between items-center">
                            <Chip>{certificate.date.toLocaleDateString()}</Chip>
                            <a 
                                href={certificate.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="text-[var(--accent-color)] hover:underline"
                                on:click|stopPropagation
                            >
                                View Certificate
                            </a>
                        </div>
                    </Card>
                    
                {/each}
            </div>
        {/if}
    </div>
</SearchPage>

{#if selectedCertificate}
    <div class="modal" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <img src={getAssetURL(selectedCertificate.image)} alt={selectedCertificate.name} class="modal-image" />
            <div class="modal-details">
                <h2>{selectedCertificate.name}</h2>
                <p>{selectedCertificate.issuer}</p>
                <p>{selectedCertificate.description}</p>
                <p>Date: {selectedCertificate.date.toLocaleDateString()}</p>
                <a href={selectedCertificate.link} target="_blank" rel="noopener noreferrer" class="text-[var(--accent-color)] hover:underline">
                    View Certificate
                </a>
            </div>
            <button class="close-button" on:click={closeModal}>×</button>
        </div>
    </div>
{/if}

<style lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        background-color: var(--main);
        padding: 20px;
        border-radius: 10px;
        max-width: 90%;
        max-height: 90%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-image {
        max-width: 100%;
        max-height: 60vh;
        object-fit: contain;
        margin-bottom: 20px;
    }

    .modal-details {
        text-align: center;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 30px;
        color: var(--text);
        background: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .modal-content {
            padding: 10px;
        }

        .modal-image {
            max-height: 50vh;
        }
    }
</style>
