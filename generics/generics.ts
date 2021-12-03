let numArray:number[] = []
let strArray:string[] = [];

function lastItem<T>(arr: T[]) {
    let sum:T;
    return arr[arr.length - 1];
}

document.addEventListener('DOMContentLoaded', e => {

    document.getElementById("numSubmit")?.addEventListener('click', e => {
        e.preventDefault();

        numArray.push(parseInt((<HTMLInputElement>document.getElementById('num1')).value))
        numArray.push(parseInt((<HTMLInputElement>document.getElementById('num2')).value))
        numArray.push(parseInt((<HTMLInputElement>document.getElementById('num3')).value))
        numArray.push(parseInt((<HTMLInputElement>document.getElementById('num4')).value))
        numArray.push(parseInt((<HTMLInputElement>document.getElementById('num5')).value))

        let output = (<HTMLInputElement>document.getElementById('numResult')).value;

        (<HTMLInputElement>document.getElementById('numResult')).value = `The number ${lastItem(numArray)} is the last item of the [${numArray}] array`
        //console.log(lastItem(numArray))
        
    })

    document.getElementById("strSubmit")?.addEventListener('click', e => {
        e.preventDefault();

       strArray.push((<HTMLInputElement>document.getElementById('string1')).value)
       strArray.push((<HTMLInputElement>document.getElementById('string2')).value)
       strArray.push((<HTMLInputElement>document.getElementById('string3')).value)
       strArray.push((<HTMLInputElement>document.getElementById('string4')).value)
       strArray.push((<HTMLInputElement>document.getElementById('string5')).value)


        let output = (<HTMLInputElement>document.getElementById('strResult')).value;

        (<HTMLInputElement>document.getElementById('strResult')).value = `The string ${lastItem(strArray)} is the last item of the [${strArray}] array`
        //console.log(lastItem(strArray))
        
    })







})