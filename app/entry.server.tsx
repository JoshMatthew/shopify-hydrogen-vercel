import type {EntryContext} from '@remix-run/server-runtime';
import {RemixServer} from '@remix-run/react';
import {renderToReadableStream} from 'react-dom/server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext | any,
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
