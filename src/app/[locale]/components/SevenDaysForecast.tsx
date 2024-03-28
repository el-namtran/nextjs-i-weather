import { useTranslations } from "next-intl";

const SevenDaysForecast: React.FC<any> = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("sevenDays")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { SevenDaysForecast };
