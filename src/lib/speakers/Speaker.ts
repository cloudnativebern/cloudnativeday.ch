export interface Speaker {
	name: string;
	bio: string;
	tagline: string;
	imgSrc: string;
	links: Link[];
}

export interface Link {
	text: string;
	url: string;
	type: LinkType;
}

export enum LinkType {
	TWITTER,
	GITHUB,
	HOMEPAGE,
	BLOG,
	LINKEDIN
}
