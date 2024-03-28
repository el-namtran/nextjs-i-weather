import { useTranslations } from "next-intl";

const Satellite = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("satellite")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { Satellite };
