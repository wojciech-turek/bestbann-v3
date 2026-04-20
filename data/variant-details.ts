export type VariantSize = {
  doughWeight: string;
  dimensions: string;
  catalogNumber: string;
};

export type VariantDetails = {
  sizes: VariantSize[];
};

const variantDetails: Record<string, VariantDetails> = {
  // ── Rattan ──────────────────────────────────────────────
  "rattan/round": {
    sizes: [
      {
        doughWeight: "250–500 g / 0.5–1.1 lb",
        dimensions: '⌀ 18 x 8.5 cm / 7.1" x 3.3"',
        catalogNumber: "RRBS0250",
      },
      {
        doughWeight: "400–700 g / 0.9–1.5 lb",
        dimensions: '⌀ 19.5 x 8.5 cm / 7.7" x 3.3"',
        catalogNumber: "RRBS0500",
      },
      {
        doughWeight: "500–1000 g / 1.1–2.2 lb",
        dimensions: '⌀ 22 x 8.5 cm / 8.7" x 3.3"',
        catalogNumber: "RRBS0750",
      },
      {
        doughWeight: "750–1500 g / 1.7–3.3 lb",
        dimensions: '⌀ 25 x 8.5 cm / 9.8" x 3.3"',
        catalogNumber: "RRBS1000",
      },
      {
        doughWeight: "1000–2000 g / 2.2–4.4 lb",
        dimensions: '⌀ 28 x 9 cm / 11" x 3.5"',
        catalogNumber: "RRBS1500",
      },
    ],
  },
  "rattan/oblong": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '28 x 13 x 8 cm / 11" x 5.1" x 3.1"',
        catalogNumber: "ROBS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '32 x 14 x 9 cm / 12.6" x 5.5" x 3.5"',
        catalogNumber: "ROBS0750",
      },
      {
        doughWeight: "1000–1500 g / 2.2–3.3 lb",
        dimensions: '35 x 15 x 9 cm / 13.8" x 5.9" x 3.5"',
        catalogNumber: "ROBS1000",
      },
      {
        doughWeight: "1500–2000 g / 3.3–4.4 lb",
        dimensions: '40 x 15 x 10 cm / 15.7" x 5.9" x 3.9"',
        catalogNumber: "ROBS1500",
      },
    ],
  },
  "rattan/oval": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '26 x 18 x 9 cm / 10.2" x 7.1" x 3.5"',
        catalogNumber: "ROVS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '28 x 19 x 9 cm / 11" x 7.5" x 3.5"',
        catalogNumber: "ROVS0750",
      },
      {
        doughWeight: "1000–1500 g / 2.2–3.3 lb",
        dimensions: '32 x 20 x 10 cm / 12.6" x 7.9" x 3.9"',
        catalogNumber: "ROVS1000",
      },
    ],
  },
  "rattan/baguette": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '38 x 9 x 6 cm / 15" x 3.5" x 2.4"',
        catalogNumber: "RBGS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '43 x 10 x 7 cm / 16.9" x 3.9" x 2.8"',
        catalogNumber: "RBGS0750",
      },
    ],
  },
  "rattan/mini-round": {
    sizes: [
      {
        doughWeight: "100–200 g / 0.2–0.4 lb",
        dimensions: '⌀ 13 x 6 cm / 5.1" x 2.4"',
        catalogNumber: "RMRS0100",
      },
      {
        doughWeight: "200–350 g / 0.4–0.8 lb",
        dimensions: '⌀ 15 x 7 cm / 5.9" x 2.8"',
        catalogNumber: "RMRS0200",
      },
    ],
  },
  "rattan/square": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '21 x 21 x 8 cm / 8.3" x 8.3" x 3.1"',
        catalogNumber: "RSQS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '24 x 24 x 9 cm / 9.4" x 9.4" x 3.5"',
        catalogNumber: "RSQS0750",
      },
    ],
  },
  "rattan/big-sliced-bread": {
    sizes: [
      {
        doughWeight: "1500–2500 g / 3.3–5.5 lb",
        dimensions: '38 x 13 x 12 cm / 15" x 5.1" x 4.7"',
        catalogNumber: "RBSS1500",
      },
      {
        doughWeight: "2500–3500 g / 5.5–7.7 lb",
        dimensions: '44 x 15 x 13 cm / 17.3" x 5.9" x 5.1"',
        catalogNumber: "RBSS2500",
      },
    ],
  },

  // ── Cork ────────────────────────────────────────────────
  "cork/round": {
    sizes: [
      {
        doughWeight: "400–700 g / 0.9–1.5 lb",
        dimensions: '⌀ 20 x 8.5 cm / 7.9" x 3.3"',
        catalogNumber: "CRBS0500",
      },
      {
        doughWeight: "500–1000 g / 1.1–2.2 lb",
        dimensions: '⌀ 22 x 8.5 cm / 8.7" x 3.3"',
        catalogNumber: "CRBS0750",
      },
      {
        doughWeight: "750–1500 g / 1.7–3.3 lb",
        dimensions: '⌀ 25 x 9 cm / 9.8" x 3.5"',
        catalogNumber: "CRBS1000",
      },
    ],
  },
  "cork/oblong": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '28 x 13 x 8 cm / 11" x 5.1" x 3.1"',
        catalogNumber: "COBS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '32 x 14 x 9 cm / 12.6" x 5.5" x 3.5"',
        catalogNumber: "COBS0750",
      },
      {
        doughWeight: "1000–1500 g / 2.2–3.3 lb",
        dimensions: '36 x 15 x 9 cm / 14.2" x 5.9" x 3.5"',
        catalogNumber: "COBS1000",
      },
    ],
  },
  "cork/oval": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '26 x 18 x 9 cm / 10.2" x 7.1" x 3.5"',
        catalogNumber: "COVS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '28 x 19 x 9 cm / 11" x 7.5" x 3.5"',
        catalogNumber: "COVS0750",
      },
    ],
  },
  "cork/baguette": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '38 x 9 x 6 cm / 15" x 3.5" x 2.4"',
        catalogNumber: "CBGS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '43 x 10 x 7 cm / 16.9" x 3.9" x 2.8"',
        catalogNumber: "CBGS0750",
      },
    ],
  },

  // ── Bamboo ──────────────────────────────────────────────
  "bamboo/round": {
    sizes: [
      {
        doughWeight: "400–700 g / 0.9–1.5 lb",
        dimensions: '⌀ 19.5 x 8.5 cm / 7.7" x 3.3"',
        catalogNumber: "BRBS0500",
      },
      {
        doughWeight: "500–1000 g / 1.1–2.2 lb",
        dimensions: '⌀ 22 x 8.5 cm / 8.7" x 3.3"',
        catalogNumber: "BRBS0750",
      },
      {
        doughWeight: "750–1500 g / 1.7–3.3 lb",
        dimensions: '⌀ 25 x 9 cm / 9.8" x 3.5"',
        catalogNumber: "BRBS1000",
      },
    ],
  },
  "bamboo/oblong": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '28 x 13 x 8 cm / 11" x 5.1" x 3.1"',
        catalogNumber: "BOBS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '32 x 14 x 9 cm / 12.6" x 5.5" x 3.5"',
        catalogNumber: "BOBS0750",
      },
      {
        doughWeight: "1000–1500 g / 2.2–3.3 lb",
        dimensions: '36 x 15 x 10 cm / 14.2" x 5.9" x 3.9"',
        catalogNumber: "BOBS1000",
      },
    ],
  },

  // ── Plastic ─────────────────────────────────────────────
  "plastic/round": {
    sizes: [
      {
        doughWeight: "400–700 g / 0.9–1.5 lb",
        dimensions: '⌀ 20 x 8.5 cm / 7.9" x 3.3"',
        catalogNumber: "PRBS0500",
      },
      {
        doughWeight: "500–1000 g / 1.1–2.2 lb",
        dimensions: '⌀ 22 x 8.5 cm / 8.7" x 3.3"',
        catalogNumber: "PRBS0750",
      },
      {
        doughWeight: "750–1500 g / 1.7–3.3 lb",
        dimensions: '⌀ 25 x 9 cm / 9.8" x 3.5"',
        catalogNumber: "PRBS1000",
      },
    ],
  },
  "plastic/oblong": {
    sizes: [
      {
        doughWeight: "500–750 g / 1.1–1.7 lb",
        dimensions: '28 x 13 x 8 cm / 11" x 5.1" x 3.1"',
        catalogNumber: "POBS0500",
      },
      {
        doughWeight: "750–1000 g / 1.7–2.2 lb",
        dimensions: '32 x 14 x 9 cm / 12.6" x 5.5" x 3.5"',
        catalogNumber: "POBS0750",
      },
      {
        doughWeight: "1000–1500 g / 2.2–3.3 lb",
        dimensions: '36 x 15 x 10 cm / 14.2" x 5.9" x 3.9"',
        catalogNumber: "POBS1000",
      },
    ],
  },
};

export const getVariantDetails = (
  productSlug: string,
  variantSlug: string,
): VariantDetails | null => {
  return variantDetails[`${productSlug}/${variantSlug}`] ?? null;
};
