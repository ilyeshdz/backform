import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Backform</title>
      </Head>
      <h1>Hello from Backform</h1>
    </div>
  );
});
