// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bro Skatepark',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/marcusradell/bro-skatepark' }],
			sidebar: [
				{
					label: 'Resources',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
	],
});
