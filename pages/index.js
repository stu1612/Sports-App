// npm
import { gql, GraphQLClient } from "graphql-request";

// files
import { LandingBanner, Posts, NextGame } from "../components";

export default function Home({
  banner,
  upcoming,
  primaryPosts,
  secondaryPosts,
}) {
  const data = banner && banner[0];
  const upcomingData = upcoming && upcoming[0];

  return (
    <>
      <LandingBanner data={data} />
      <NextGame upcomingData={upcomingData} />
      <Posts primaryPosts={primaryPosts} secondaryPosts={secondaryPosts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.HYGRAPH_PROJECT_API);

  const bannerQuery = gql`
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

  const upcomingQuery = gql`
    query nextFixtures {
      nextFixtures {
        superettanLogo {
          url
        }
        opponent
        location
        dateAndTime
      }
    }
  `;

  const primaryPostsQuery = gql`
    query primaryPosts {
      primaryPosts {
        title
        slug
        featuredImage {
          url
        }
        excerpt
        date
        author {
          coverImage {
            url
          }
        }
      }
    }
  `;

  const secondaryPostsQuery = gql`
    query secondaryPosts {
      secondaryPosts {
        title
        slug
        featuredImage {
          url
        }
        excerpt
        date
        author {
          coverImage {
            url
          }
        }
      }
    }
  `;

  const data = await client.request(bannerQuery);
  const upcomingData = await client.request(upcomingQuery);
  const primaryData = await client.request(primaryPostsQuery);
  const secondaryData = await client.request(secondaryPostsQuery);

  return {
    props: {
      banner: data.banners,
      upcoming: upcomingData.nextFixtures,
      primaryPosts: primaryData.primaryPosts,
      secondaryPosts: secondaryData.secondaryPosts,
    },
  };
};
