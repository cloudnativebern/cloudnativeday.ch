import { error } from '@sveltejs/kit';
import type { Speaker, SpeakerDetails } from '$lib/Speaker';

const API_BASE_URL = 'https://sessionize.com/api/v2/ci31vfb4/view';

export async function getSpeakers(fetchFn: typeof fetch): Promise<Speaker[]> {
	const url = `${API_BASE_URL}/SpeakerWall`;
	return get(fetchFn, url);
}

export async function getSpeaker(fetchFn: typeof fetch, id: string): Promise<SpeakerDetails> {
	const url = `${API_BASE_URL}/Speakers`;
	const speakers = (await get(fetchFn, url)) as SpeakerDetails[];

	const speaker = speakers.find((s) => s.id === id);
	if (!speaker) {
		throw error(404, `speaker ${id} not found`);
	}

	return speaker;
}

async function get(fetchFn: typeof fetch, url: string) {
	const res = await fetchFn(url);
	const resBody = await res.json();

	if (!res.ok) {
		throw error(res.status, resBody.description);
	}

	return resBody;
}
