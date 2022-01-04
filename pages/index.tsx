/* eslint-disable react/jsx-key */
import type {GetStaticProps, NextPage} from "next";

import Link from "next/link";
import {useEffect, useState} from "react";

import StoreCard from "../components/StoreCard";
import {Store} from "../types";
import api from "../api";

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({stores}) => {
  return (
    <main style={{display: "flex", flexDirection: "column", gap: 12}}>
      {stores.map((store) => (
        <Link href={`/${store.id}`}>
          <a>
            <StoreCard key={store.id} store={store} />
          </a>
        </Link>
      ))}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stores = await api.list();

  return {
    props: {stores},
  };
};

export default Home;
