![image](https://github.com/ManuLintz/art-explorer/assets/23702487/0c1b1380-fe31-4945-a79f-88de89dd8ffe)

# Worklife - Technical test

This is my take on the Frontend technical test

You can see it deployed [here](https://art-explorer-henna.vercel.app/)

To run it locally, run
```sh
yarn

yarn dev
```

## Dependencies
The project was initiated with [vite](https://vitejs.dev/) using [this template](https://github.com/fresh-app/fresh-vite-app-react-ts)

I used the [icons](https://www.radix-ui.com/icons) from radix, a minimalist and unstyled components library

Tests are written with [vitest](https://vitest.dev/)

Since the instructions mentionned:
> Make API requests using Axios, native fetch, or any other suitable method

I decided to use [axios](https://axios-http.com/fr/) + [TanStack query](https://tanstack.com/query/latest). 
I specifically used the `useInfiniteQuery` hook from TanStack query.

I had to find a way to load images with a lower definition than the one provided by the API. Playing around with the enpoint parameters, I found a way to rewrite the url to get a lower definition and wrote a [helper](https://github.com/ManuLintz/art-explorer/blob/main/src/utils/rewriteImageUrl.ts) to do so. I couldn't find any documentation for that.
