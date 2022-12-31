/// <reference types="react" />
import 'dayjs/locale/ja';
declare type ScheduleItem = {
    startDate: string;
    endDate: string;
    timeFrame: string;
    description: string;
};
export declare type ScheduleListProps = {
    scheduleList: ScheduleItem[];
    currentTime: string;
};
export declare const ScheduleList: ({ scheduleList, currentTime, }: ScheduleListProps) => JSX.Element;
export {};
