import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import anaisUrlichs from '$lib/images/speakers/anais-urlichs.png';
import margaManterola from '$lib/images/speakers/marga-manterola.jpeg';
import naomiBrockwell from '$lib/images/speakers/naomi-brockwell.webp';
import { LinkType } from '$lib/speakers/Speaker';

export const load: PageLoad = ({ params }) => {
	switch (params.slug) {
		case 'anais-urlichs':
			return {
				speaker: {
					name: 'Anaïs Urlichs',
					bio: 'Anaïs is a Developer Advocate at Aqua Security, where she contributes to Aqua’s cloud native open source projects. When she is not advocating DevOps best practices, she runs her own YouTube Channel centered around cloud native technologies. Before joining Aqua, Anais worked as SRE at Civo, a cloud native service provider, where she worked on infrastructure for hundreds of tenant clusters. As CNCF ambassador, her passion lies in making tools and platforms more accessible to developers and community members.',
					tagline: 'Open Source Developer Advocate at Aqua Security',
					imgSrc: anaisUrlichs,
					links: [
						{
							text: '@urlichsanais',
							url: 'https://twitter.com/urlichsanais',
							type: LinkType.TWITTER
						},
						{ text: 'anaisurl.com', url: 'https://anaisurl.com/', type: LinkType.BLOG },
						{
							text: 'linkedin.com/in/urlichsanais/',
							url: 'https://www.linkedin.com/in/urlichsanais/',
							type: LinkType.LINKEDIN
						}
					]
				}
			};
		case 'naomi-brockwell':
			return {
				speaker: {
					name: 'Naomi Brockwell',
					bio: '',
					tagline: '',
					imgSrc: naomiBrockwell,
					links: []
				}
			};

		case 'marga-manterola':
			return {
				speaker: {
					name: 'Marga Manterola',
					bio: "A Debian Developer and Open Source enthusiast, Marga has been working with Linux for over 20 years. She worked as an SRE at Google, in the team maintaining the internal Linux distribution used by Google engineers. She later joined the cloud native world, working on Flatcar, a container optimized OS, and Inspektor Gadget, a collection of eBPF tools for Kubernetes. She's currently working as Director of Engineering at Isovalent, where she leads the teams developing eBPF products like Cilium, Hubble and Tetragon.",
					tagline: 'Director of Engineering at Isovalent',
					imgSrc: margaManterola,
					links: [
						{
							text: '@marga_manterola',
							url: 'https://twitter.com/marga_manterola',
							type: LinkType.TWITTER
						},
						{ text: 'isovalent.com', url: 'https://www.isovalent.com/', type: LinkType.HOMEPAGE },
						{
							text: 'linkedin.com/in/margamanterola/',
							url: 'https://www.linkedin.com/in/margamanterola/',
							type: LinkType.LINKEDIN
						}
					]
				}
			};
	}
	throw error(404, 'Not found');
};
