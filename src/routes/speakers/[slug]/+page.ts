import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import anaisUrlichs from '$lib/images/speakers/anais-urlichs.png';
import margaManterola from '$lib/images/speakers/marga-manterola.jpeg';
import naomiBrockwell from '$lib/images/speakers/naomi-brockwell.webp';
import gregorHohpe from '$lib/images/speakers/gregor-hohpe.jpg';
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
							type: LinkType.Twitter
						},
						{ text: 'anaisurl.com', url: 'https://anaisurl.com/', type: LinkType.Blog },
						{
							text: 'linkedin.com/in/urlichsanais/',
							url: 'https://www.linkedin.com/in/urlichsanais/',
							type: LinkType.LinkedIn
						}
					]
				}
			};
		case 'naomi-brockwell':
			return {
				speaker: {
					name: 'Naomi Brockwell',
					bio: 'Naomi Brockwell is a tech journalist, and creator of "NBTV.media". NBTV is a tech channel, with 700k subscribers across platforms, that teaches people how to reclaim control of their lives in the digital age. The channel gives people the tools they need to take back their privacy, money, and free online expression.<br /><br /> From 2013 - 2015 she worked as a policy associate at the New York Bitcoin Center.From 2015 - 2021 she has worked as a producer for 19 - times Emmy- Award - Winning Journalist John Stossel.From 2021 to 2022 she hosted the CoinDesk series "Break it Down", and the CoinDesk daily show "The Hash".<br /><br /> Naomi was a producer for the 2015 feature documentary Bitcoin: The End of Money as We Know It (Best International Documentary, Anthem Film Festival; Winner of Special Jury Prize, Amsterdam Film Festival), and producer of the 2018 award - winning documentary about the housing crash The Bubble.<br /><br /> Naomi is the co- founder of The Soho Forum, a NY debate series.She is on the Advisory Council at the Mannkal Economic Education Foundation, and is author of "Beginner\'s Introduction To Privacy", and the children\'s book "Billy\'s Bitcoin".',
					tagline: 'Tech Journalist and Creator of NBTV',
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
							type: LinkType.Twitter
						},
						{ text: 'isovalent.com', url: 'https://www.isovalent.com/', type: LinkType.Homepage },
						{
							text: 'linkedin.com/in/margamanterola/',
							url: 'https://www.linkedin.com/in/margamanterola/',
							type: LinkType.LinkedIn
						}
					]
				}
			};

		case 'gregor-hohpe':
			return {
				speaker: {
					name: 'Gregor Hohpe',
					bio: 'As Director of Enterprise Strategy at AWS, Gregor helps technology leaders transform both their organization and their technology platform. You’ll find him riding the Architect Elevator from the engine room to the penthouse, perhaps automating serverless solutions in the morning and preparing board presentations in the afternoon. His favorite pastime is dissecting buzzwords and replacing them with meaningful decisions and architectural trade-offs.<br /><br />Gregor is known as co-author of the seminal book Enterprise Integration Patterns, which provided the reference vocabulary for all modern ESBs. His book The Software Architect Elevator tells stories from the trenches of IT transformation while his articles have been featured in Best Software Writing by Joel Spolsky and 97 Things Every Software Architect Should Know. He is an active member of the IEEE Software advisory board.',
					tagline: 'Enterprise Strategist at AWS',
					imgSrc: gregorHohpe,
					links: [
						{
							text: '@ghohpe',
							url: 'https://twitter.com/ghohpe',
							type: LinkType.Twitter
						},
						{ text: 'aws.amazon.com', url: 'https://aws.amazon.com/', type: LinkType.Homepage },
						{
							text: 'linkedin.com/in/ghohpe/',
							url: 'https://www.linkedin.com/in/ghohpe/',
							type: LinkType.LinkedIn
						}
					]
				}
			};
	}
	throw error(404, 'Not found');
};
