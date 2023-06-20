// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		speakers?: Promise<import('$lib/Speaker').Speaker[]>;
		speaker?: Promise<import('$lib/Speaker').Speaker>;
		sessions?: Promise<import('$lib/Session').GroupedSession>;
		session?: Promise<import('$lib/Session').Session>;
	}
	// interface Error {}
	// interface Platform {}
}
