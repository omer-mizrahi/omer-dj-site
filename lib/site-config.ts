export const services = [
  {
    slug: "wedding",
    title: "חתונה",
    description:
      "דיג'יי לחתונה יוקרתית - עומר מזרחי מביא את האנרגיה המושלמת ליום המאושר בחייכם.",
  },
  {
    slug: "bar-mitzvah",
    title: "בר מצווה",
    description:
      "דיג'יי לבר מצווה - מסיבה בלתי נשכחת עם המוזיקה הכי מעודכנת.",
  },
  {
    slug: "bat-mitzvah",
    title: "בת מצווה",
    description:
      "דיג'יי לבת מצווה - חגיגה מודרנית, מקפיצה ומותאמת אישית.",
  },
  {
    slug: "henna",
    title: "חינה",
    description:
      "דיג'יי לחינה - שילוב מנצח של מסורת עם ביטים מודרניים.",
  },
  {
    slug: "private-events",
    title: "אירועים פרטיים",
    description:
      "דיג'יי לאירועים פרטיים - ימי הולדת ומסיבות מכל סוג.",
  },
  {
    slug: "corporate",
    title: "אירועים עסקיים",
    description:
      "דיג'יי לאירועי חברה והשקות - מיתוג מוזיקלי מדויק לעסק שלכם.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const locations = [
  "ראשון לציון",
  "נס ציונה",
  "רחובות",
  "תל אביב",
  "רמת גן",
  "חולון",
  "בת ים",
  "פתח תקווה",
  "גבעתיים",
  "רמת השרון",
  "הרצליה",
  "קריית אונו",
  "בית שמש",
  "ירושלים",
  "מעלה אדומים",
  "מישור אדומים",
  "נתניה",
  "רעננה",
  "כפר סבא",
] as const;

/** סלאגים לכתובת URL — באותו סדר כמו `locations` */
const LOCATION_SLUGS = [
  "rishon-lezion",
  "nes-ziona",
  "rehovot",
  "tel-aviv",
  "ramat-gan",
  "holon",
  "bat-yam",
  "petah-tikva",
  "givatayim",
  "ramat-hasharon",
  "herzliya",
  "kiryat-ono",
  "bet-shemesh",
  "jerusalem",
  "maale-adumim",
  "mishor-adumim",
  "netanya",
  "raanana",
  "kfar-saba",
] as const;

export type LocationSlug = (typeof LOCATION_SLUGS)[number];

function assertSameLength(): void {
  if (locations.length !== LOCATION_SLUGS.length) {
    throw new Error("locations ו-LOCATION_SLUGS חייבים באותו אורך");
  }
}
assertSameLength();

export const locationEntries = locations.map((name, i) => ({
  name,
  slug: LOCATION_SLUGS[i],
})) as { name: (typeof locations)[number]; slug: LocationSlug }[];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug) ?? null;
}

export function getLocationBySlug(slug: string) {
  return locationEntries.find((l) => l.slug === slug) ?? null;
}

export function isValidServiceSlug(slug: string): slug is ServiceSlug {
  return services.some((s) => s.slug === slug);
}

export function isValidLocationSlug(slug: string): slug is LocationSlug {
  return locationEntries.some((l) => l.slug === slug);
}
