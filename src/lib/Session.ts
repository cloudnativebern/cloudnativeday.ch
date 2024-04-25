import kubernetes from '$lib/images/technologies/kubernetes.svg';
import argoCD from '$lib/images/technologies/argo-cd.svg';
import backstage from '$lib/images/technologies/backstage.svg';

export enum SessionStatus {
	Accepted = 'Accepted'
}

export enum SessionGroupName {
	All = 'All',
	SessionTalk = 'Session talk',
	Workshop = 'Workshop'
}

export type GroupedSessions = Record<SessionGroupName, Session[]>;

export interface Event {
	sessions: Session[];
}

export interface SessionGroup {
	groupId: string;
	groupName: SessionGroupName;
	sessions: Session[];
}

export interface Session {
	questionAnswers: string[];
	id: string;
	title: string;
	description: string | null;
	startsAt: string | null;
	endsAt: string | null;
	isServiceSession: boolean;
	isPlenumSession: boolean;
	speakers: {
		id: string;
		name: string;
	}[];
	categories: SessionCategory[];
	roomId: string | null;
	room: string | null;
	liveUrl: string | null;
	recordingUrl: string | null;
	status: SessionStatus;
}

interface SessionCategory {
	id: string;
	name: string;
	categoryItems: {
		id: string;
		name: string;
	}[];
}

export function sessionLogo(session: Session) {
	if (session.categories) {
		for (const c of session.categories) {
			if (c.name === 'Logo') {
				for (const i of c.categoryItems) {
					switch (i.name) {
						case 'Kubernetes':
							return kubernetes;
						case 'Argo CD':
							return argoCD;
						case 'Backstage':
							return backstage;
					}
				}
			}
		}
	}
}

export function isExternalSession(session: Session) {
	return session.isServiceSession && session.title.indexOf('hosted by') >= 0;
}
