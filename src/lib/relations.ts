import { NotebookPenIcon } from 'lucide-svelte';
import { DATA } from '$lib/data/resume';
import type { Post } from '$lib/types';

type Project = (typeof DATA.projects)[number];

const normalize = (value: string) => value.trim().toLowerCase();

/** Resolves the `project` frontmatter field of a post to its entry in DATA.projects. */
export function getProjectForPost(project: string | undefined): Project | undefined {
	if (!project) return undefined;

	const match = DATA.projects.find((entry) => normalize(entry.title) === normalize(project));

	if (!match && import.meta.env.DEV) {
		console.warn(`[relations] no project named "${project}" in DATA.projects`);
	}

	return match;
}

/** Reverse index: project title -> the post about it. */
export function buildPostByProject(posts: Post[]): Record<string, Post> {
	const index: Record<string, Post> = {};

	for (const post of posts) {
		const project = getProjectForPost(post.project);
		if (project) index[project.title] = post;
	}

	return index;
}

/** A ProjectCard `links` entry pointing at the related post, or nothing. */
export function relatedPostLink(post: Post | undefined) {
	if (!post) return [];
	return [{ type: 'Post', href: `/blog/${post.slug}`, icon: NotebookPenIcon, internal: true }];
}
