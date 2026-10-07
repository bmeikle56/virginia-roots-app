const storyDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatStoryDate(isoDate: string) {
  return storyDate.format(new Date(`${isoDate}T00:00:00Z`));
}
