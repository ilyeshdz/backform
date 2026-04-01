import { Header } from "@/components/header.tsx";
import { Footer } from "@/components/footer.tsx";
import { define } from "@/utils.ts";
import { Partial } from "fresh/runtime";
import type { FunctionComponent } from "preact";

type Props = {
  Component: FunctionComponent<Record<PropertyKey, never>>;
};

export default define.page(function App({ Component }: Props) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>backform</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body f-client-nav>
        <Header />
        <Partial name="main-content">
          <Component />
        </Partial>
        <Footer />
        </body>
    </html>
  );
});
