import { Capsule } from "@/components/common/ui/capsule";

export default function BlogHomeSidebarStatsLayout({ stats }) {
  // 팔로워/팔로잉 값은 의미를 살리기 위해 설명 목록 구조를 유지한다.
  return (
    <dl className="mt-5 flex flex-wrap items-center gap-2">
      {stats.map((stat) => (
        <div key={stat.id}>
          <Capsule className="h-auto gap-1.5 rounded-full border-border bg-background px-4 py-2 hover:bg-background">
            <dt className="text-sm font-semibold text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="text-base font-bold tracking-tight text-foreground">
              {stat.value}
            </dd>
          </Capsule>
        </div>
      ))}
    </dl>
  );
}
