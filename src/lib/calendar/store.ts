import { persisted } from 'svelte-persisted-store';
import * as devalue from 'devalue';

export interface Dayblock {
	title: string;
	tasks: string[];
}

export const placedTasks = persisted<Map<string, Map<number, Dayblock>>>('placedTasks', new Map(), {
	serializer: devalue,
});
