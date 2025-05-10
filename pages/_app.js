import Layout from "../components/Layout/layout";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <>
      <h1>Hello!</h1>
    </>
  );
}
