import { persisted } from 'svelte-persisted-store';
import * as devalue from 'devalue';

export const tasks = persisted<Task[]>('tasks', [], {
	serializer: devalue,
});
