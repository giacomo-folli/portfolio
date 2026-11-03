import type { Handle } from "@sveltejs/kit";
import { getLocale } from "$lib/i18n";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.locale = getLocale(event.request.headers);
  event.setHeaders({ Vary: "Accept-Language, x-vercel-ip-country" });

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('<html lang="en">', `<html lang="${event.locals.locale}">`),
  });
};
