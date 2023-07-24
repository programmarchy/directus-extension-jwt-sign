import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'jwt-sign',
	name: 'Sign JWT',
	icon: 'signature',
	description: 'Sign a JSON Web Token (JWT)',
	overview: ({ payload }) => [
		{
			label: 'Payload',
			text: payload,
		},
	],
	options: [
		{
			field: 'payload',
			name: 'Payload',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
			},
		},
		{
			field: 'secret',
			name: 'Secret',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				note: 'Defaults to the <a href="https://docs.directus.io/self-hosted/config-options.html#security" target="_blank" title="Configuration Options">secret string for the project</a>.',
				options: {
					iconRight: 'vpn_key',
				},
			},
		},
		{
			field: 'options',
			name: 'Options',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
				note: 'An object passed to the <a href="https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback" target="_blank">`jwt.sign` options argument</a>.',
				options: {
					language: 'json',
					placeholder: JSON.stringify(
						{
							expiresIn: '1d',
						},
						null,
						2,
					),
					template: JSON.stringify(
						{
							expiresIn: '1d',
						},
						null,
						2,
					),
				},
			},
		},
	],
});
