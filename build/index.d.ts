export default class StoreManager {
  constructor(storeName?: string, namespace?: string, parent?: null);
  has(key: any): boolean;
  get(key: any): any;
  set(key: string, ref: any, override?: boolean): boolean;
  remove(key: any): boolean;
}
