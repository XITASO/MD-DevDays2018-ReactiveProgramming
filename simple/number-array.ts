import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Observable.from(numberArray)
    .filter(v => v % 2 === 0)
    .map(v => v * 3)
    .subscribe((value: number) => {
        console.log(value);
    });
