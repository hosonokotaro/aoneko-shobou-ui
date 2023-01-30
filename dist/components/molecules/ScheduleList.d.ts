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
    /** 現在の日時 (e.g. 2022/12/1) を受け取る。Library 側では日時の取得に責任を持たない為 */
    currentTime: string;
};
export declare const ScheduleList: ({ scheduleList, currentTime, }: ScheduleListProps) => JSX.Element;
export {};
