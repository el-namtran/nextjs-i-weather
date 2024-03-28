'use client';

import { useTranslations } from "next-intl";

const Maps = ({ title }: { title: string }) => {
  const t = useTranslations("Template");

  return (
    <>
      <div>Translate by Next-intl: {t("maps")}</div>
      <div>Translate by get data from DB: {title}</div>
    </>
  );
};

export { Maps };
