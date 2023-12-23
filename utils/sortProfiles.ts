import type UserProfile from "@/interfaces/userProfile.interface";

const sortProfiles = (profiles: UserProfile[]) => {
  return profiles.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );
};

export default sortProfiles;
