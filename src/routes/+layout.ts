import * as api from '$lib/api';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async () => {
	return {
		sessions: await api.getSessions(fetch),
		speakers: await api.getSpeakers(fetch),
		schedule: await api.getSchedule(fetch)
	};
};
