import jwt from 'jsonwebtoken';
import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	payload: string | Record<string, any>;
	secret?: string;
	options?: Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'jwt-sign',
	handler: ({ payload, secret, options }, { env }) => {
		return jwt.sign(
			payload,
			secret || env['SECRET'],
			options || undefined
		);
	},
});
