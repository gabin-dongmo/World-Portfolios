import Tag from "../models/Tag";
import profiles from "./Profiles";

const tags = profiles.reduce((tagsList: Tag[], profile) => {
  profile.tags.forEach((tag) => {
    if (!tagsList.map((t) => t.text).includes(tag)) {
      const newTag = { text: tag, isActive: false } as Tag;
      tagsList.push(newTag);
    }
  });
  return tagsList;
}, []);
tags.push({ text: "All tags", isActive: true } as Tag);

export default tags;
