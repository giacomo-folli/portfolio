export type Categories =
	| 'sveltekit'
	| 'svelte'
	| 'rust'
	| 'go'
	| 'ai'
	| 'systems'
	| 'adonisjs'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	ai_assisted?: boolean
}