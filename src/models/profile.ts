import { SortableByName } from "./SortableByName";

export default interface Profile extends SortableByName {
  id: number;
  link: string;
  tags: string[];
}
