export default function PrefixPage({ params }: { params: { prefix: any } }) {
  return <div>{params.prefix}</div>;
}
