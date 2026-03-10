import { StatsLoadingCard } from '@/components/StatsCard';

function loading() {
  return (
    <h2 className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsLoadingCard />
      <StatsLoadingCard />
      <StatsLoadingCard />
    </h2>
  );
}

export default loading;
