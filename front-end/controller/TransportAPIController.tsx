import { grab } from "../services/grabscrapper";
import { bluesg } from "../services/bluesg";
import { publictransport } from "../services/publictransport";
import { taxi } from "../services/taxi";
import {ResultItem} from "../types/ResultItem";
import TransportAPI from "../services/transportAPI";
export default class TransportAPIController {
    private apis: TransportAPI[] = []
    private pax: number = 1
    private choices: boolean[] = [false,false,false]
    constructor() {
        this.resetAPI();
    }

    addAPI(api:any){
        this.apis.push(api);
    }
    removeAPI(api:any){
        const removeItem = (array: any[], item: any) => {
            const index = array.indexOf(item);
            if (index != -1) {
                array = array.splice(index, 1);
            }
        };
        removeItem(this.apis,api);
    }
    clearAPI(){
        this.apis = []
    }
    resetAPI(){
        this.clearAPI();
        this.addAPI(grab);
        this.addAPI(bluesg);
        this.addAPI(publictransport);
        this.addAPI(taxi);
    }
    checkAPI(){
        this.resetAPI();
        if (this.choices[0]) {
            this.removeAPI(grab);
            this.removeAPI(bluesg);
            this.removeAPI(taxi);
        }
        if (this.choices[1]) {
            this.removeAPI(grab);
            this.removeAPI(publictransport);
            this.removeAPI(taxi);
        }
        if (this.choices[2]) {
            this.removeAPI(grab);
            this.removeAPI(taxi);
        }
    }
    getPax(){
        return this.pax
    }

    setPax(pax:number){
        if(pax < 1 || pax > 9){
            pax = 1;
        }
        this.pax = pax;
    }

    getChoices(){
        return this.choices
    }

    setChoices(choices:boolean[]){
        this.choices = choices
    }
    async fetchData(startLoc:string,destLoc:string,setResultArr:any){
        this.checkAPI();
        this.apis.forEach((api:any) => {
            api.updateResult(startLoc, destLoc, this.pax, setResultArr);
        });
    };

    async sortData(resultArr: any, sortBy: string, setsortedResultArr:any){
        async function printSortedData(sortBy: string): Promise<any> {
            const sortedData = resultArr
                .flatMap((result) => result.data)
                .sort(async (dataA, dataB) => {
                    const [valA1, valA2] = await dataA;
                    const [valB1, valB2] = await dataB;
                    return sortBy === "duration" ? valA1 - valB1 : valA2 - valB2;
                });

            const allData: ResultItem[] = [];

            for (let i = 0; i < resultArr.length; i++) {
                const result = resultArr[i];
                const data = result.data;
                const firstData = await data[0];
                const [firstVal1, firstVal2] = await firstData;

                for (let j = 0; j < data.length; j++) {
                    const currData = data[j];
                    const [serviceType, duration, fare] = await currData;
                    allData.push({
                        name: result.name,
                        iconURL: result.iconURL,
                        serviceType,
                        duration,
                        fare,
                        deepLinkFn: result.deepLinkFn,
                    });
                }
            }

            allData.sort((dataA, dataB) =>
                sortBy === "duration"
                    ? dataA.duration - dataB.duration
                    : dataA.fare - dataB.fare
            );
            return allData;
        }

        printSortedData(sortBy)
            .then((allData) => {
                setsortedResultArr(allData);
            })
            .catch((error) => console.error(error));
    }
}

export const transportAPIController = new TransportAPIController();