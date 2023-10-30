/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button, Input, Logo } from '@/components';
import { useAuthRegister } from '@/hooks';
import type { Register } from '@/models';
import { Schema } from '@/schemas';
type ViewPass = { [P in keyof Omit<Register, 'username' | 'email'>]: boolean };
type ViewPassKey = keyof ViewPass;

export function Home(): ReactElement {
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<Register>({
		resolver: zodResolver(Schema.register),
	});

	const { mutateAsync: singUp } = useAuthRegister({
		onError: (error: AxiosError | Error): void => {
			if (error instanceof AxiosError) {
				// toast.error(error.response?.data.message);
				return;
			}

			toast.error('Ocorreu um erro, tente mais tarde.');
		},
		onSuccess: (): void => {
			toast.success('Dados enviados.');
			reset();
		},
	});

	function handleRegister(data: Register): void {
		singUp(data);
	}

	const [viewPass, setViewPass] = useState<ViewPass>({
		password_confirm: false,
		password: false,
	});

	function handleVisibility(target: ViewPassKey): void {
		setViewPass((state) => ({
			...state,
			[target]: !state[target],
		}));
	}

	return (
		<div className="container flex w-screen h-screen items-center justify-center">
			<form
				onSubmit={handleSubmit(handleRegister)}
				className="w-full lg:w-2/4 flex flex-col gap-6"
			>
				<Logo />
				<div className="flex flex-1 flex-col gap-2 w-full">
					<div className="space-y-1 w-full">
						<Input
							placeholder="Username"
							type="text"
							{...register('username')}
						/>
						{errors.username && (
							<div className="text-destructive text-xs">
								* {errors.username.message}
							</div>
						)}
					</div>

					<div className="space-y-1 w-full">
						<Input
							placeholder="E-mail"
							type="email"
							{...register('email')}
						/>
						{errors.email && (
							<div className="text-destructive text-xs">
								* {errors.email.message}
							</div>
						)}
					</div>

					<div className="space-y-1 w-full">
						<div className="relative w-full">
							<Input
								placeholder="Senha"
								type={viewPass.password ? 'text' : 'password'}
								{...register('password')}
							/>
							{viewPass.password && (
								<EyeOff
									className="cursor-pointer absolute right-2 top-2"
									size={20}
									onClick={(): void => handleVisibility('password')}
								/>
							)}

							{!viewPass.password && (
								<Eye
									className="cursor-pointer absolute right-2 top-2"
									size={20}
									onClick={(): void => handleVisibility('password')}
								/>
							)}
						</div>
						{errors.password && (
							<div className="text-destructive text-xs">
								* {errors.password.message}
							</div>
						)}
					</div>

					<div className="space-y-1 w-full">
						<div className="relative w-full">
							<Input
								placeholder="Confirmar senha"
								type={viewPass.password_confirm ? 'text' : 'password'}
								{...register('password_confirm')}
							/>
							{viewPass.password_confirm && (
								<EyeOff
									className="cursor-pointer absolute right-2 top-2"
									size={20}
									onClick={(): void => handleVisibility('password_confirm')}
								/>
							)}

							{!viewPass.password_confirm && (
								<Eye
									className="cursor-pointer absolute right-2 top-2"
									size={20}
									onClick={(): void => handleVisibility('password_confirm')}
								/>
							)}
						</div>
						{errors.password_confirm && (
							<div className="text-destructive text-xs">
								* {errors.password_confirm.message}
							</div>
						)}
					</div>
				</div>
				<Button
					type="submit"
					variant="default"
				>
					Cadastrar
				</Button>
			</form>
		</div>
	);
}
