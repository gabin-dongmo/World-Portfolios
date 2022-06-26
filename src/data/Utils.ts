import { SortableByName } from "../models/SortableByName";

class Utils {
  static OrderAlphabetically<T extends SortableByName>(collection: T[]): T[] {
    return collection.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}

export default Utils;
