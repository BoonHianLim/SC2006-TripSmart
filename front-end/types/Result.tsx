export type Result = {
    name: string;
    iconURL: string;
    data: Promise<[string, number, number]>[];
};