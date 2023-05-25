import { error } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const speakers = await api.getSpeakers(fetch);

	const speaker = speakers.find((s) => s.id === params.id);
	if (!speaker) {
		throw error(404, `speaker ${params.id} not found`);
	}

	return {
		speaker
	};
};
