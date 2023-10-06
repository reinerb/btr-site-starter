import React from "react";
import RootLayout from "@/utils/components/RootLayout/RootLayout";

function About() {
  return (
    <RootLayout title="About" className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">About</h1>
      <section className="flex flex-col gap-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          adipisci nulla vero in sit natus culpa dolorum alias ratione at.
        </p>
        <p>
          Enim iste, ex repellat minima provident quo officia in ullam a modi
          quia beatae fugit asperiores similique necessitatibus error aliquam.
        </p>
        <p>
          Fugit ipsam architecto, mollitia explicabo illum ex rem vero ducimus
          asperiores sed reiciendis neque iure repellendus, minus magni.
          Tempora, tempore.
        </p>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum
          quibusdam repellat perferendis? Illo molestiae ea quisquam voluptas!
          Ex, repellat.
        </p>
        <p>
          Laborum, fugiat, nesciunt veniam nam nostrum, suscipit eum quasi quas
          officia pariatur sapiente. Quaerat sed architecto quis minima, ab
          reprehenderit.
        </p>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          accusamus possimus doloremque odit ipsam corrupti fugiat neque facilis
          quaerat culpa!
        </p>
        <p>
          Fugit earum commodi illum vel qui dignissimos quia eos quasi unde,
          maxime iste quas consequatur, velit adipisci corporis impedit
          aspernatur.
        </p>
        <p>
          Dolorem porro accusamus labore facere voluptate officia tenetur iste,
          accusantium qui ab debitis? Blanditiis velit, quas eum alias et
          consequuntur.
        </p>
      </section>
    </RootLayout>
  );
}

export default About;
