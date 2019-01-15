/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SetupMetrics {
	timerFinishToTransition: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		milliseconds: number;
		formatted: string;
		raw: number;
		timestamp: number;
	};
	transitionToTransition: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		milliseconds: number;
		formatted: string;
		raw: number;
		timestamp: number;
	};
	transitionToTimerStart: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		milliseconds: number;
		formatted: string;
		raw: number;
		timestamp: number;
	};
}