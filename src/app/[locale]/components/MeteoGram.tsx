import { useTranslations } from "next-intl";

const MeteoGram = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("meteoGram")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { MeteoGram };
