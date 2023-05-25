import { error } from '@sveltejs/kit';
import type Speaker from '$lib/Speaker';

const API_BASE_URL = 'https://sessionize.com/api/v2/ci31vfb4/view';

export async function getSpeakers(fetchFn: typeof fetch): Promise<Speaker[]> {
	const url = `${API_BASE_URL}/Speakers`;
	return get(fetchFn, url);
}

async function get(fetchFn: typeof fetch, url: string) {
	const res = await fetchFn(url);
	const resBody = await res.json();

	if (!res.ok) {
		throw error(res.status, resBody.description);
	}

	return resBody;
}
