import { useTranslations } from "next-intl";

const CurrentWeather = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("now")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { CurrentWeather };
