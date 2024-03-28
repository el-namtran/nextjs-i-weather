import { useTranslations } from "next-intl";

const History = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("history")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { History };
