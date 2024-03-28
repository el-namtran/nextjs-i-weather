import TabsCustom from "@/app/[locale]/components/TabsCustom";

export default function Home({
  params,
}: {
  params: { locale: string };
}) {
  return <TabsCustom locale={params.locale} />;
}
