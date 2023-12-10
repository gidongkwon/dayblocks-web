import { persisted } from 'svelte-persisted-store';
import * as devalue from 'devalue';
import type { Task } from './types';

export const tasks = persisted<Task[]>('tasks', [], {
	serializer: devalue,
});
