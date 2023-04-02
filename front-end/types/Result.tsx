export type Result = {
    name: string;
    iconURL: string;
    data: Promise<[number,number]>[];
};