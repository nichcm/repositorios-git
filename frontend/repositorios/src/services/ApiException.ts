export class ApiException extends Error {
    public readonly massage: string = '';

    constructor(massage: string){
        super();

        this.massage = massage;
    }
}