export enum LinkType {
	CompanyWebsite = 'Company_Website',
	LinkedIn = 'LinkedIn',
	Twitter = 'Twitter'
}

export interface Speaker {
	id: string;
	firstName: string;
	lastName: string;
	fullName: string;
	bio: string;
	tagLine: string;
	profilePicture: string;
	sessions: {
		id: string;
		name: string;
	}[];
	isTopSpeaker: boolean;
	links: {
		title: string;
		url: string;
		linkType: LinkType;
	}[];
	questionAnswers: string;
	categories: string;
}

export interface SpeakerDetails extends Speaker {
	bio: string;
	sessions: {
		id: string;
		name: string;
	}[];
	links: {
		title: string;
		url: string;
		linkType: LinkType;
	}[];
	questionAnswers: string;
	categories: string;
}
