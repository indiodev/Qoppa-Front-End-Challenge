/* eslint-disable no-unused-vars */
import type { AxiosInstance, AxiosResponse } from 'axios';

import type { Register } from '@/models';

export class Auth {
	constructor(private client: AxiosInstance) {}

	public async singUp(data: Register): Promise<AxiosResponse<void>> {
		return await this.client.post('/singUp', data);
	}
}
