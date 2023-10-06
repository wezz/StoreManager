/* # Storage Manager

This will gelp you fetch information from session and local storage.

## Usage
import StoreManager from '../modules/StoreManager';
const storage = new StoreManager("storename");
let valueobj = storage.Get("valuekey"); // Will return a JSOn object if possible

valueobj.prop = "updatedprop";
storage.Save("valuekey", valueobj, true); 

The last boolean defines if the values should be stored past the current session

*/

"use strict";
export default class StoreManager {
  private prefix: string;
  constructor(_prefix = "cache") {
    this.prefix = _prefix;
  }

  private getStorageMedium(permanent = true) {
    if (permanent && typeof window?.localStorage !== "undefined") {
      return window.localStorage;
    }
    if (typeof window?.sessionStorage !== "undefined") {
      return window.sessionStorage;
    }
    return null;
  }
  public Has(key: string) {
    return typeof this.Get(`${this.prefix}-${key}`) !== "undefined";
  }
  public Get(key: string) {
    const tempStorage = this.getStorageMedium(false);
    const permStorage = this.getStorageMedium(true);
    let success = false;
    let data = null;
    if (tempStorage && permStorage) {
      try {
        data = tempStorage.getItem(`${this.prefix}-${key}`);
        data = this.toJSONIfJSON(data);

        success = data !== null;
      } catch (e) {
        /* empty */ }
      if (!success) {
        try {
          data = permStorage.getItem(`${this.prefix}-${key}`);
          data = this.toJSONIfJSON(data);
          success = data !== null;
        } catch (e) {
          /* empty */ }
      }
    }
    return data;
  }

  private toJSONIfJSON(data: any) {
    if (
      typeof data === "string" &&
      (data.indexOf("{") === 0 || data.indexOf("[") === 0)
    ) {
      data = JSON.parse(data);
    }
    return data;
  }
  public Save(key: string, data: any, permanent = true) {
    console.warn("StoreManager.Save is deprecated");
    this.Set(key, data, permanent);
  }
  public Set(key: string, data: any, permanent = true) {
    const storage = this.getStorageMedium(permanent);
    let success = false;
    if (storage) {
      if (typeof data === "object") {
        data = JSON.stringify(data);
      }
      try {
        storage.setItem(`${this.prefix}-${key}`, data);
        success = true;
      } catch (e) {
        console.error("Unable to save object", e);
      }
    }
    return success;
  }
  public Remove(key: string) {
    const permanentStore = this.getStorageMedium(true);
    const sessionStorage = this.getStorageMedium(false);
    if (permanentStore) {
      permanentStore.removeItem(`${this.prefix}-${key}`);
    }
    if (sessionStorage) {
      sessionStorage.removeItem(`${this.prefix}-${key}`);
    }
  }
}