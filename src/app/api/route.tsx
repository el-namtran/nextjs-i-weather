import { type NextRequest } from "next/server";

const data = [
  {
    id: "1",
    templateID: "templateNow",
    title: "Page Current Weather",
    prefix: "weather",
    friendlyUrl: "current-weather/location",
    language: "english",
  },
  {
    id: "2",
    templateID: "templateHourly",
    title: "Page Hourly",
    prefix: "weather",
    friendlyUrl: "hourly-forecast/today",
    language: "vietnamese",
  },
  {
    id: "3",
    templateID: "sevenDays",
    title: "Page 7 Days",
    prefix: "weather",
    friendlyUrl: "7-days/list",
    language: "chinese",
  },
  {
    id: "4",
    templateID: "meteoGram",
    title: "Page Meteo Gram",
    prefix: "weather",
    friendlyUrl: "7-days/meteogram",
    language: "chinese",
  },
  {
    id: "5",
    templateID: "satellite",
    title: "Page Satellite",
    prefix: "weather",
    friendlyUrl: "live-satellite",
    language: "american",
  },
  {
    id: "6",
    templateID: "maps",
    title: "Page Maps",
    prefix: "weather",
    friendlyUrl: "maps/storm",
    language: "mexican",
  },
  {
    id: "6",
    templateID: "history",
    title: "Page History",
    prefix: "weather",
    friendlyUrl: "history/daily-history",
    language: "mexican",
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const prefix = searchParams.get("prefix");
  const friendlyUrl = searchParams.get("friendlyUrl");
  const language = searchParams.get("language");

  const filteredData = data.filter((d) => {
    const modifiedFriendlyUrl = friendlyUrl;
    return d.prefix === prefix && d.friendlyUrl === modifiedFriendlyUrl;
  });

  return Response.json({ filteredData });
}
