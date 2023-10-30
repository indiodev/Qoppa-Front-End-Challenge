import { Register } from '@/models';
import { Service } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

async function mutator(data: Register): Promise<AxiosResponse<void>> {
	return await Service.auth.singUp(data);
}

interface Props {
	onSuccess: () => void;
	onError: (error: AxiosError | Error) => void;
}

export function useAuthRegister({ onError, onSuccess }: Props) {
	return useMutation({
		mutationFn: (data: Register) => mutator(data),
		onSuccess: () => onSuccess(),
		onError,
	});
}
