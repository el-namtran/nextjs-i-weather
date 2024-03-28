import { Maps } from "@/app/[locale]/components/Maps";
import TabsCustom from "@/app/[locale]/components/TabsCustom";
import { data } from "@/utils/mockData";
import { Suspense } from "react";

import { CurrentWeather } from "../../components/CurrentWeather";
import { History } from "../../components/History";
import { HourlyForecast } from "../../components/HourlyForecast";
import { MeteoGram } from "../../components/MeteoGram";
import { Satellite } from "../../components/Satellite";
import { SevenDaysForecast } from "../../components/SevenDaysForecast";

const getData = async (params: any, searchParams: any) => {
  "use server";

  const filteredData = data.filter((d) => {
    const modifiedFriendlyUrl = params.friendlyUrl.join("/");
    const language = searchParams.language || "english";

    return (
      d.prefix === params.prefix &&
      d.friendlyUrl === modifiedFriendlyUrl &&
      language === d.language
    );
  });

  return filteredData;
};

export default async function FriendlyUrlPage({
  params,
  searchParams,
}: {
  params: { prefix: any; friendlyUrl: any; locale: string; language: string };
  searchParams: { language: string; country: string };
}) {
  const filteredData = await getData(params, searchParams);

  const renderComponent = (templateID: string, title: string) => {
    switch (templateID) {
      case "templateNow":
        return <CurrentWeather title={title} />;
      case "templateHourly":
        return <HourlyForecast title={title} />;
      case "templateSevenDays":
        return <SevenDaysForecast title={title} />;
      case "templateMeteoGram":
        return <MeteoGram title={title} />;
      case "templateSatellite":
        return <Satellite title={title} />;
      case "templateMaps":
        return <Maps title={title} />;
      case "templateHistory":
        return <History title={title} />;
    }
  };

  return (
    <div>
      <TabsCustom
        locale={params.locale}
        friendlyUrl={params.friendlyUrl.join("/")}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {renderComponent(filteredData[0].templateID, filteredData[0].title)}
      </Suspense>
    </div>
  );
}
