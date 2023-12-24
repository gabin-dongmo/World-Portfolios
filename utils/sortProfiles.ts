import { Portfolio } from "@/interfaces/portfolio.interface";

const sortProfiles = (profiles: Portfolio[]) => {
  return profiles.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );
};

export default sortProfiles;
