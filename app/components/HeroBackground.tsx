type HeroBackgroundProps = {
  image: string;
};

export function HeroBackground({ image }: HeroBackgroundProps) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2,4,9,.88) 0%, rgba(2,4,9,.48) 48%, rgba(2,4,9,.72) 100%), linear-gradient(0deg, rgba(5,7,12,1) 0%, transparent 38%), url('${image}')`,
      }}
    />
  );
}
