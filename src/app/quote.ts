export class Quote {
    public Up:number
    public Down:number
    constructor(public name:string, public Author:string,public message:string, public date:any){
        this.Up =0;
        this.Down =0;
    }
}
