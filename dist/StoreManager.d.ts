export default class StoreManager {
    private prefix;
    constructor(_prefix?: string);
    private getStorageMedium;
    Has(key: string): boolean;
    Get(key: string): any;
    private toJSONIfJSON;
    Save(key: string, data: any, permanent?: boolean): void;
    Set(key: string, data: any, permanent?: boolean): boolean;
    Remove(key: string): void;
}
