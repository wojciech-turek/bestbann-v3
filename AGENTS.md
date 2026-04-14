This project is an uprated version of the original BestBann website.
It implements new more modern design, features remain mostly the same.

The pages we want to have are:

- Home page /
- About page /about
- Contact page /contact
- Products page /products
- Product page /products/[product]
- Product Variant Page /products/[product]/[variant]

We have the following products

- Rattan Bread Proofing Basket
- Cork Bread Proofing Basket
- Bamboo Bread Proofing Basket
- Plastic Bread Proofing Basket
- Engraved Bread Proofing Basket
- Liners Bread Proofing Basket

Rattan Bread Proofing Basket has the following variants

- Rattan Bread Proofing Basket - Round
- Rattan Bread Proofing Basket - Oblong
- Rattan Bread Proofing Basket - Oval
- Rattan Bread Proofing Basket - Square
- Rattan Bread Proofing Basket - Mini Round
- Rattan Bread Proofing Basket - Baguette
- Rattan Bread Proofing Basket - Big Sliced Bread

Cork Bread Proofing Basket has the following variants

- Cork Bread Proofing Basket - Round
- Cork Bread Proofing Basket - Oblong
- Cork Bread Proofing Basket - Oval
- Cork Bread Proofing Basket - Baguette
- Cork Bread Proofing Basket - Engraved Bottom

Bamboo Fiber Bread Proofing Basket has the following variants

- Bamboo Fiber Bread Proofing Basket - Round
- Bamboo Fiber Bread Proofing Basket - Oblong

Plastic Bread Proofing Basket has the following variants

- Plastic Bread Proofing Basket - Round
- Plastic Bread Proofing Basket - Oblong

Engraved Bread Proofing Basket can be made for Rattan and Cork baskets, for rattan baskets the bottom is replaced with a wooden base with the engraving.

Liners For Bread Proofing Baskets has no variants but can be made for every type of basket.

## Product Data Source

For product listing and variant metadata, use `data/products-catalog.json` as the single source of truth.

- Keep product slugs, variant slugs, and route hrefs there.
- Keep translation locator keys there (e.g. `headerLinkKey`, `homeProductKey`, `translationKey`).
- Keep product image paths there and prefer the organized folder structure under `public/imgs/products/*`.

## Product Page Rule

- Product detail routes (`/products/[product]`) should read only from `data/products-catalog.json`.
- If `hasVariants` is `false`, render explanatory product copy instead of a selectable variants grid.
- Header product menu entries should also come from `data/products-catalog.json` to avoid route/key drift.
