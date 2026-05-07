export type Office = {
  city: string;
  address: string;
  state: string;
  zip: string;
  phone?: string;
  hq?: boolean;
};

// Single Matthews Hotel Team office. The parent firm has 30+ offices nationally,
// but the hospitality practice is anchored in Austin.
export const offices: Office[] = [
  {
    city: "Austin",
    address: "515 Congress Ave., Suite 2410",
    state: "TX",
    zip: "78701",
    hq: true,
  },
];
