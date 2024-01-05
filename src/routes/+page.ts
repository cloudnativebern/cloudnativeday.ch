import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	return {
		sessions: await api.getSessions(fetch),
		speakers: await api.getSpeakers(fetch)
	};
};
