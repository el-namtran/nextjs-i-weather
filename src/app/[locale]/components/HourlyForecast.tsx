import { useTranslations } from "next-intl";

const HourlyForecast = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("hourly")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { HourlyForecast };
