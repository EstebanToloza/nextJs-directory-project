import type {NextPage} from "next";

//import {NextRouter, withRouter} from "next/router";

import {useRouter} from "next/router";
import Link from "next/link";

// interface Props {
//   router: NextRouter;
// }

const Store: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      Hello Store
      <a href="/">Volver al inicio con anchor</a>
      <button onClick={() => router.push("/")}>Volver al inicio con button</button>
      <Link href="/">Volver al inicio con link</Link>
    </div>
  );
};

//export default withRouter(Store);
export default Store;
