import { Observable } from "rxjs/Observable";
import * as WebRequest from "web-request";
import "rxjs/add/operator/do";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/concatMap";
import "rxjs/add/operator/reduce";

const swapi: string = "https://swapi.co/api/people/";

const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Observable.from(numberArray)
    .map(v => swapi + v)
    .do(v => console.log(v))
    .concatMap(v => WebRequest.json(v))
    .reduce((array: string[], json: any) => { // scan vs reduce
        array.push(json.name);
        return array;
    }, [])
    .subscribe((value: any) => {
        console.log(value);
    });
