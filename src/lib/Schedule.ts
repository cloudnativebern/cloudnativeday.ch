import type { Session } from './Session';

export interface Schedule {
	dates: ScheduleDate[];
}

export interface ScheduleDate {
	date: string;
	isDefault: boolean;
	rooms: Room[];
	timeSlots: TimeSlot[];
}

export interface Room {
	id: number;
	name: string;
	sessions: Session[];
	hasOnlyPlenumSessions: boolean;
}

export interface TimeSlot {
	slotStart: string;
	rooms: TimeSlotRoom[];
}

export interface TimeSlotRoom {
	id: number;
	name: string;
	session: Session;
	index: number;
}
