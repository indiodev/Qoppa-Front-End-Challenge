import type { z } from 'zod';

import type { Schema } from '@/schemas';

export type Register = z.infer<typeof Schema.register>;
