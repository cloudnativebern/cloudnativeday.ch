import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
	return {
		speakers: api.getSpeakers(fetch)
	};
};
