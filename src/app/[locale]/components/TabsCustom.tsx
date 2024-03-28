import { Tabs } from "antd";
import { redirect } from "next/navigation";

const items: {
  key: string;
  label: string;
  content: string;
  friendlyUrl: string;
}[] = [
  {
    key: "now",
    friendlyUrl: "current-weather/location",
    label: "Now",
    content: "Content of Tab Pane 1",
  },
  {
    key: "hourly",
    friendlyUrl: "hourly-forecast/today",
    label: "Hourly",
    content: "Content of Tab Pane 2",
  },
  {
    key: "sevenDays",
    friendlyUrl: "7-days/list",
    label: "7 days",
    content: "Content of Tab Pane 3",
  },
  {
    key: "maps",
    friendlyUrl: "maps/storm",
    label: "Maps",
    content: "Content of Tab Pane 4",
  },
  {
    key: "satellite",
    friendlyUrl: "live-satellite",
    label: "Satellite",
    content: "Content of Tab Pane 5",
  },
  {
    key: "history",
    friendlyUrl: "history/daily-history",
    label: "History",
    content: "Content of Tab Pane 6",
  },
  {
    key: "meteoGram",
    friendlyUrl: "7-days/meteogram",
    label: "Meteo Gram",
    content: "Content of Tab Pane 7",
  },
];

export default function TabsCustom({
  friendlyUrl,
  locale,
}: {
  friendlyUrl?: string;
  locale: string;
}) {
  const getActiveKey = (): string => {
    return items.find((item) => item.friendlyUrl === friendlyUrl)
      ?.key as string;
  };

  const onChange = async (key: string) => {
    "use server";

    const friendlyUrl = items?.find((item) => item.key === key)?.friendlyUrl;
    redirect(
      `/${locale}/weather/${friendlyUrl}?language=${
        locale === "vn" ? "vietnamese" : "english"
      }`
    );
  };
  return (
    <Tabs
      defaultActiveKey={getActiveKey() ?? "now"}
      items={items}
      onChange={onChange}
    />
  );
}
