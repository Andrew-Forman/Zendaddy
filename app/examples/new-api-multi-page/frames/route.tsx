/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const totalPages = 6;

const frames = createFrames({
  basePath: "/examples/new-api-multi-page/frames",
});

const handleRequest = frames(async (ctx) => {
  const pageIndex = Number(ctx.searchParams.pageIndex || 0);

  const imageUrl = `https://picsum.photos/seed/frames.js-${pageIndex}/300/200`;

  return {
    image: (
      <div tw="flex flex-col">
        <img width={300} height={200} src={imageUrl} alt="Image" />
        <div tw="flex">
          This is slide {pageIndex + 1} / {totalPages}
        </div>
      </div>
    ),
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
