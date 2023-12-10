import { persisted } from 'svelte-persisted-store';
import * as devalue from 'devalue';

export interface Dayblock {
	date: Date;
	tasks: string[];
}

export const config = persisted<Dayblock[]>('config', [], { serializer: devalue });
