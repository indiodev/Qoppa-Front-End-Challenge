/* eslint-disable no-unused-vars */
import { z } from 'zod';

export const register = z
	.object({
		username: z
			.string({
				required_error: 'Informe username',
			})
			.min(6, { message: 'Informe ao menos 6 caracteres' }),
		email: z
			.string({
				required_error: 'Informe e-mail',
			})
			.email({ message: 'Informe e-mail válido' }),
		password: z
			.string({
				required_error: 'Informe senha',
			})
			.min(6, { message: 'Informe ao menos 6 caracteres' }),
		password_confirm: z
			.string({
				required_error: 'Informe confirmar senha',
			})
			.min(6, { message: 'Informe ao menos 6 caracteres' }),
	})
	.refine(({ password_confirm, password }) => password_confirm === password, {
		message: 'Senha não confere',
		path: ['password_confirm'],
	})
	.transform(({ password_confirm, ...rest }) => ({
		password_confirm: undefined,
		...rest,
	}));
