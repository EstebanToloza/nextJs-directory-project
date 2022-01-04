import type {GetStaticPaths, GetStaticProps, NextPage} from "next";

//import {NextRouter, withRouter} from "next/router";

import {useRouter} from "next/router";
import Link from "next/link";

import api from "../api";
import {Store} from "../types";
import StoreCard from "../components/StoreCard";

interface Props {
  store: Store;
}

const Store: NextPage<Props> = ({store}) => {
  const router = useRouter();

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 12}}>
      <StoreCard store={store} />
      {/* <a href="/">Volver al inicio con anchor</a>
      <button onClick={() => router.push("/")}>Volver al inicio con button</button> */}
      <Link href="/">Volver al inicio con link</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const store = await api.fetch(params?.id as string);

  return {
    props: {store},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = await api.list();

  return {
    paths: stores.map((store) => ({params: {id: store.id}})),
    fallback: "blocking",
  };
};

//export default withRouter(Store);
export default Store;
