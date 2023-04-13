export default class TransportAPI
{
    constructor() {
        if(this.constructor == TransportAPI){
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    updateResult(pickupLocation: string,
                 dropoffLocation: string,
                 pax: number = 1,
                 updateFn: any){
        throw new Error("Abstract Method has no implementation");
    }
}