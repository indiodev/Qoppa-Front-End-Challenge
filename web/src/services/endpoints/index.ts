import { API } from '../api';
import { Auth } from './auth';

export const Service = {
	auth: new Auth(API),
};
