import { lazy, Suspense } from "react";

const Page = lazy(() => import("./Q1"));

const Q319 = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Page />
  </Suspense>
);

export default Q319;
