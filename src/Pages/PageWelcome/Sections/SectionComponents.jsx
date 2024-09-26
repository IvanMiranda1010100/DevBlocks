import { Card } from "../Components/Card";

export const SectionComponents = () => {
  return (
    <>
      <section className="">
        <h2 id="components" className="text-center font-semibold text-4xl">
          Components Tailwind CSS
        </h2>
        <h3 id="components" className="text-center mt-3 text-xl">
          A continuacion veras muchos tipos de componentes hechos con css puro o
          con tailwind css listos para su uso, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt voluptates ratione sit fugit
          voluptatibus. Hic itaque repellendus quam, quae voluptas fugiat maxime
          reiciendis quidem perspiciatis, a eaque autem at commodi?
        </h3>

        <article className="flex flex-col items-center justify-center mt-4 mb-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>
      </section>

      <section className="">
        <h2 id="components" className="text-center font-semibold text-4xl">
          Components CSS
        </h2>
        <h3 id="components" className="text-center mt-3 text-xl">
          A continuacion veras muchos tipos de componentes hechos con css puro o
          con tailwind css listos para su uso, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt voluptates ratione sit fugit
          voluptatibus. Hic itaque repellendus quam, quae voluptas fugiat maxime
          reiciendis quidem perspiciatis, a eaque autem at commodi?
        </h3>

        <article className="flex flex-col items-center justify-center mt-4 mb-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>
      </section>
    </>
  );
};
