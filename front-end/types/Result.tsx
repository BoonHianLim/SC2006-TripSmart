export type Result = {
    name: string; // Example: Grab
    iconURL: string;
    data: Promise<[string, number, number]>[]; //Example: JustGrab, 30(minutes), 17(price)
};