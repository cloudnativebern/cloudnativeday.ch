import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
	return {
		sessions: api.getSessions(fetch),
		speakers: api.getSpeakers(fetch)
	};
};
