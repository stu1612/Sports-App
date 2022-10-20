// npm
import { gql, GraphQLClient } from "graphql-request";

// files
import { LandingBanner } from "../components";
import NextGame from "../components/NextGame";

export default function Home({ banner }) {
  const data = banner && banner[0];

  return (
    <>
      <LandingBanner data={data} />
      <NextGame />
    </>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.HYGRAPH_PROJECT_API);

  const query = gql`
    query Banner {
      banners {
        title
        slug
        id
        createdAt
        content {
          html
          raw
          text
        }
        buttonText
        excerpt
        featuredImage {
          url
        }
      }
    }
  `;

  const data = await client.request(query);

  return {
    props: {
      banner: data.banners,
    },
  };
};
