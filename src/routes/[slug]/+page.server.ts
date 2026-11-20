import { error, redirect } from "@sveltejs/kit";

const postsOnBearblog = [
  "a-rant-against-the-smooth-life",
  "choosing-my-own-standards",
  "why-self-hosting-and-open-source-matter-more-than-ever",
  "why-and-how-to-write-things-on-the-internet",
  "when-things-are-okish",
  "vim-resources",
  "to-sit-with-myself-completely-alone",
  "the-subtle-art-of",
  "tdd",
  "take-on-coding",
  "some-failures-that-turn-out-to-be-just-beginnings",
  "running",
  "quieter-by-design",
  "photos",
  "on-coding-ego-and-attention",
  "my-first-half-marathon",
  "inadequate",
  "i-should-work-on-gratitude",
  "i-need-to-make-some-changes",
  "claude-pretend-youre-an-alien",
];

export async function load({ params }) {
  if (postsOnBearblog.includes(params.slug)) {
    redirect(307, `https://paco.bearblog.dev/${params.slug}`);
  }

  try {
    await import(`../../content/${params.slug}.md`);
  } catch {
    error(404, `Could not find ${params.slug}`);
  }

  redirect(307, `/blog/${params.slug}`);
}
