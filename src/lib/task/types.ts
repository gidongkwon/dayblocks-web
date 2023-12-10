export interface Task {
	type: 'repetitive' | 'once';
	title: string;
	description: string;
	due: Date;
	completion: Completion[];
}

export interface UniversityLectureTask {
	place?: string;
}

export interface Completion {
	completed_at: Date;
}

export interface TaskPlacement {
	date: Date;
	block: number;
}
