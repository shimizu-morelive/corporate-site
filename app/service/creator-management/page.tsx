import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "ライブコマーサーマネジメント | 株式会社モアライブ",
  description: "ライブコマーサー向けの商品・案件、配信環境、報酬・キャリア支援についてご紹介します。",
};

export default function CreatorManagementPage() {
  return (
    <ServiceDetail
      variant="creator"
      number="03"
      label="FOR COMMERCE CREATORS"
      title={"ライブコマーサー\nマネジメント"}
      lead="商品・案件・配信環境を整え、ライブコマーサーの活動と成長を支援します。"
      descriptions={[
        "一人ひとりの強みに合う商品や案件を提案し、集客・配信・振り返りまで支援します。継続して活動できる報酬機会とキャリアを一緒につくります。",
      ]}
      introTitle={"売ることを\n仕事にする"}
      imageSrc="/service-creator-management.png"
      imageAlt="スタッフの支援を受けながら商品紹介の準備をするライブコマーサー"
      imageCaption="商品選び、企画、配信環境まで、チームでコマーサーの活動を支えます。"
      featuresTitle="長く活躍するための環境"
      features={[
        { title: "商品・案件", text: "一人ひとりの個性や強みに合った商品と、継続的に取り組める案件を提供します。" },
        { title: "集客・配信環境", text: "集客や配信企画、販売に必要な環境を整え、配信に集中できる状態をつくります。" },
        { title: "報酬・キャリア", text: "適切な報酬機会と成長の機会をつくり、ライブコマーサーとしての長期的な活動を支えます。" },
      ]}
      steps={[
        { title: "お問い合わせ", text: "これまでの活動や、今後取り組みたいことをお知らせください。" },
        { title: "面談", text: "得意な商品分野、配信経験、希望する活動方法について伺います。" },
        { title: "商品・案件のご提案", text: "個性や強みとの相性を考え、商品や案件をご提案します。" },
        { title: "配信・振り返り", text: "配信環境を整え、結果を振り返りながら次の成長につなげます。" },
      ]}
      ctaTitle="売る力を、キャリアに。"
      ctaText="ライブコマースを仕事にしたい方、さらに活動の幅を広げたい方からのご連絡をお待ちしています。"
      ctaLabel="活動について相談する"
    />
  );
}
