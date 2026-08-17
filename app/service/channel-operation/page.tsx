import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "ライブコマースチャンネル運営 | 株式会社モアライブ",
  description: "株式会社モアライブのライブコマースチャンネル運営についてご紹介します。",
};

export default function ChannelOperationPage() {
  return (
    <ServiceDetail
      variant="channel"
      number="01"
      label="LIVE COMMERCE CHANNEL"
      title={"ライブコマース\nチャンネル運営"}
      lead="商品との出会いが生まれ、何度も訪れたくなる。ライブだからつくれる、新しい売り場を育てます。"
      descriptions={[
        "モアライブは、商品の魅力をリアルタイムで伝え、視聴者が楽しみながら商品と出会えるライブコマースチャンネルをつくっています。",
        "長時間の配信を継続できる体制を整えながら、商品との出会い、ライブならではの体験、繰り返し訪れたくなる運営を大切にしています。",
      ]}
      introTitle={"視聴者が楽しめる\n新しい売り場へ"}
      imageSrc="/service-channel-operation.png"
      imageAlt="商品を紹介するライブコマーサーと配信を支えるスタッフ"
      imageCaption="商品との出会いと、ライブならではの時間を届けるチャンネルへ。"
      stat={{
        value: "50 HOURS",
        label: "週50時間の配信体制",
        text: "継続して楽しめるチャンネルを目指し、週50時間のライブ配信体制を整えています。",
      }}
      featuresTitle="チャンネルを育てる3つの視点"
      features={[
        { title: "商品との出会い", text: "商品の特徴や背景を理解し、視聴者にとって新しい発見になる伝え方を設計します。" },
        { title: "ライブならではの体験", text: "質問や反応が行き交う双方向の配信を通じて、楽しみながら選べる購買体験をつくります。" },
        { title: "継続的な運営", text: "配信結果を振り返り、企画や伝え方を改善しながら、繰り返し訪れたくなる売り場へ育てます。" },
      ]}
      steps={[
        { title: "商品選定", text: "チャンネルで届けたい商品と、その魅力を整理します。" },
        { title: "企画", text: "商品と視聴者に合う配信内容を企画します。" },
        { title: "集客・配信・販売", text: "視聴者との対話を大切にしながら、商品の理解と購入につなげます。" },
        { title: "分析・改善", text: "配信結果をもとに、次回の企画と販売方法を改善します。" },
      ]}
      comingSoon={{
        title: "チャンネルの詳しい情報は、順次公開します。",
        text: "現在、視聴者が継続して楽しめるチャンネルづくりを進めています。",
        items: ["チャンネル紹介", "配信スケジュール", "出演コマーサー", "取扱商品"],
      }}
      ctaTitle="チャンネルについて"
      ctaText="取り扱う商品や今後の配信については、お問い合わせフォームからご連絡ください。"
      ctaLabel="チャンネルについて問い合わせる"
    />
  );
}
