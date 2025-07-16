import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	return {
		speaker: await api.getSpeaker(fetch, params.id)
	};
};
