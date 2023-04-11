export type Result = {
  name: string;
  iconURL: string;
  // data: Promise<[serviceName, duration, fare]>[];
  data: Promise<[string, number, number]>[];
  deepLinkFn: any;
};
