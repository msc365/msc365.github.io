import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', (p) => !p.data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'MSC',
    description: 'Notes on Azure, DevOps, PowerShell, Bicep and Microsoft 365.',
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/notes/${p.id}/` })),
  });
}
