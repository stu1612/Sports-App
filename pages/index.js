// npm
import { gql, GraphQLClient } from "graphql-request";

// files
import {
  LandingBanner,
  Posts,
  NextGame,
  Parralax,
  Training,
} from "../components";

export default function Home({
  banner,
  upcoming,
  primaryPosts,
  secondaryPosts,
  parralax,
  training,
}) {
  const data = banner && banner[0];
  const upcomingData = upcoming && upcoming[0];
  const parralaxData = parralax && parralax[0];

  return (
    <>
      <LandingBanner data={data} />
      <NextGame upcomingData={upcomingData} />
      <Posts primaryPosts={primaryPosts} secondaryPosts={secondaryPosts} />
      <Parralax parralaxData={parralaxData} />
      <Training training={training} />
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

  const parralaxQuery = gql`
    query parralax {
      parralaxes {
        featuredImage {
          url
        }
        thinText
        thickText
      }
    }
  `;

  const trainingQuery = gql`
    query training {
      trainings {
        coverImage {
          url
        }
        title
        slug
        content {
          html
          text
        }
      }
    }
  `;

  const data = await client.request(bannerQuery);
  const upcomingData = await client.request(upcomingQuery);
  const primaryData = await client.request(primaryPostsQuery);
  const secondaryData = await client.request(secondaryPostsQuery);
  const parralaxData = await client.request(parralaxQuery);
  const trainingData = await client.request(trainingQuery);

  return {
    props: {
      banner: data.banners,
      upcoming: upcomingData.nextFixtures,
      primaryPosts: primaryData.primaryPosts,
      secondaryPosts: secondaryData.secondaryPosts,
      parralax: parralaxData.parralaxes,
      training: trainingData.trainings,
    },
  };
};
