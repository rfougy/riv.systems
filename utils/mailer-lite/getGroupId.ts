import { newsletterGroups } from "../../types/newsletterGroups";

export function getGroupId(group: newsletterGroups): string {
  switch (group) {
    case "youtube":
      return process.env.MAILERLITE_YOUTUBE_GROUP_ID as string;
    case "website":
      return process.env.MAILERLITE_WEBSITE_GROUP_ID as string;
    case "instagram":
      return process.env.MAILERLITE_INSTAGRAM_GROUP_ID as string;
  }
}
