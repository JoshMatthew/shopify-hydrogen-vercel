import {json} from '@remix-run/server-runtime';
import styles from '../styles/Homepage.styles.css';
import {LinksFunction, LoaderArgs} from '@remix-run/server-runtime';
import {useLoaderData} from '@remix-run/react';

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export const loader = async (args: LoaderArgs | any) => {
  const {collections} = await args.context.storefront.query(COLLECTIONS_QUERY);

  return json({collections});
};

export default function HomePage() {
  const {collections} = useLoaderData();

  return (
    <div className="container">
      <h1>Hello Hydrogen From Vercel!</h1>
      <span>Collections</span>

      <ul>
        {collections.nodes.map((collection: any) => {
          return <li key={collection.id}>{collection.handle}</li>;
        })}
      </ul>
    </div>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 100, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
      }
    }
  }
`;
