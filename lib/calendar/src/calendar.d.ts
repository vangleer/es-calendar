import type { Dayjs } from 'dayjs';
export declare function createNamespace(name: string): {
    n: (suffix?: string) => string;
};
export type DateCellType = 'normal' | 'today' | 'week' | 'next-month' | 'prev-month';
export interface DateCell {
    text?: number;
    isSelected?: boolean;
    date: Dayjs;
    type?: DateCellType;
}
