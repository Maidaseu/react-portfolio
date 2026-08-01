type HeroProps = {
  name: string;
  title: string;
  description: string;
};

export default function Hero({ name, title, description }: HeroProps) {
  return (
    <section>
      <h1>{name}</h1>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>View Projects</button>
      <button>Contact Me</button>
    </section>
  );
}
