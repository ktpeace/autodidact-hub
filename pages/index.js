// pages/index.js is associated with the / route.
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Flex>
        <p>This will be a beautiful hub of learning.</p>
      </Flex>
    </Layout>
  );
}
