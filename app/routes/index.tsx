import {json} from '@shopify/remix-oxygen';
import styles from '../styles/Homepage.styles.css';
import {LinksFunction, LoaderArgs} from '@shopify/remix-oxygen';
import {CollectionConnection} from '@shopify/hydrogen/storefront-api-types';
import {useLoaderData} from '@remix-run/react';

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export const loader = async ({context: {storefront}}: LoaderArgs) => {
  const {collections} = await storefront.query<{
    collections: CollectionConnection;
  }>(COLLECTIONS_QUERY);

  return json({collections});
};

export default function HomePage() {
  const {collections} = useLoaderData<typeof loader>();

  return (
    <div className="container">
      <h1>Hello Hydrogen From Vercel!</h1>
      <span>Collections</span>

      <ul>
        {collections.nodes.map((collection) => {
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
