export class mangastoreException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'mangastoreException';
    }
}