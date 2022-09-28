export default class StoreManager {
    private prefix;
    constructor(_prefix?: string);
    private storageTypes;
    private getStorageMedium;
    Has(key: string): boolean;
    Get(key: string): any;
    private toJSONIfJSON;
    Save(key: string, data: any, permanent?: boolean): void;
    Set(key: string, data: any, permanent?: boolean): boolean;
    Remove(key: string): void;
}
export interface StoreManagerClass {
    constructor(_prefix?: string): any;
    Get(key: string): any;
    Has(key: string): boolean;
    Save(key: string, data: any, permanent?: boolean): boolean;
    Set(key: string, data: any, permanent?: boolean): boolean;
    Remove(key: string): void;
}
