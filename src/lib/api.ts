import { PUBLIC_SESSIONIZE_JSON_CLIENT_ID } from '$env/static/public';
import { error } from '@sveltejs/kit';
import { SessionGroupName } from '$lib/Session';
import type { Session, SessionGroup, GroupedSessions } from '$lib/Session';
import type { Speaker, SpeakerDetails } from '$lib/Speaker';
import type { Schedule, ScheduleDate } from '$lib/Schedule';

const API_BASE_URL = `https://sessionize.com/api/v2/${PUBLIC_SESSIONIZE_JSON_CLIENT_ID}/view`;

export async function getSessions(fetchFn: typeof fetch): Promise<GroupedSessions> {
	const url = `${API_BASE_URL}/Sessions`;
	const groups: SessionGroup[] = await get(fetchFn, url);

	const groupedSessions: GroupedSessions = {
		[SessionGroupName.SessionTalk]: [],
		[SessionGroupName.Workshop]: []
	};
	for (const g of groups) {
		groupedSessions[g.groupName] = g.sessions;
	}

	return groupedSessions;
}

export async function getSession(fetchFn: typeof fetch, id: string): Promise<Session> {
	const url = `${API_BASE_URL}/Sessions`;
	const groups: SessionGroup[] = await get(fetchFn, url);

	let session: Session | undefined = undefined;
	for (const g of groups) {
		for (const s of g.sessions) {
			if (s.id === id) {
				session = s;
				break;
			}
		}
	}
	if (!session) {
		throw error(404, `session ${id} not found`);
	}

	return session;
}

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

export async function getSchedule(fetchFn: typeof fetch): Promise<Schedule> {
	const url = `${API_BASE_URL}/GridSmart`;
	const dates = (await get(fetchFn, url)) as ScheduleDate[];
	return {
		dates: dates
	};
}

async function get(fetchFn: typeof fetch, url: string) {
	const res = await fetchFn(url);
	const resBody = await res.json();

	if (!res.ok) {
		throw error(res.status, resBody.description);
	}

	return resBody;
}
