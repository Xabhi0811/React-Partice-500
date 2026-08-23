import { lazy, Suspense } from "react";

const Page = lazy(() => import("./Q1"));

const Q318 = () => (
  <Suspense fallback={<p>Loading component</p>}>
    <Page />
  </Suspense>
);

export default Q318;
