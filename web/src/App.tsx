import type { ReactElement } from 'react';
import { Home } from './pages';

import { QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from './hooks';

import { ToastContainer } from 'react-toastify';

export function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<Home />
			<ToastContainer theme="dark" />
		</QueryClientProvider>
	);
}
