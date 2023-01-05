# Minimal reproduction of an issue

## Setup

```
npm i
npm run build
cd build
http-server .
```

## Issue (bug?)

The _only_ difference between src/routes/a/+page.svelte and src/routes/b/+page.svelte is whether the script tag has lang="ts" or not.

In both pages, we create a svelte store `j` and test whether or not it's undefined. In [http://127.0.0.1:8080/a] `j` is undefined and in [http://127.0.0.1:8080/b] it is not!
