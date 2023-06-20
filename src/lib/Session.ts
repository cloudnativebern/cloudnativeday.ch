export enum SessionStatus {
	Accepted = 'Accepted'
}

export enum SessionGroupName {
	SessionTalk = 'Session talk',
	Workshop = 'Workshop'
}

export type GroupedSessions = Record<SessionGroupName, Session[]>;

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
