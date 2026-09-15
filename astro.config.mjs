// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://marcusradell.github.io/bro-skatepark",
	integrations: [
		starlight({
			title: 'Bro Skatepark',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Resources',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
	],
});
