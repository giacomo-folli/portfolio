import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		await import(`../../content/${params.slug}.md`);
	} catch {
		error(404, `Could not find ${params.slug}`);
	}

	redirect(307, `/blog/${params.slug}`);
}
