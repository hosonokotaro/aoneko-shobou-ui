/// <reference types="react" />
import 'dayjs/locale/ja';
declare type ScheduleItem = {
    startDate: string;
    endDate: string;
    timeFrame: string;
    description: string;
};
export declare type ScheduleListProps = {
    /** 予定の開始日、終了日、時間帯、内容を記載した配列を受け取る */
    scheduleList: ScheduleItem[];
    /** 要約して表示する */
    isSummary?: boolean;
};
export declare const ScheduleList: ({ scheduleList, isSummary, }: ScheduleListProps) => JSX.Element;
export {};
