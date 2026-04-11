/** שמות אייקונים מ־lucide-react לשימוש ב־flow */
export type FlowIconName =
  | "Music"
  | "Heart"
  | "Star"
  | "Flame"
  | "Sparkles"
  | "Crown"
  | "PartyPopper"
  | "Settings"
  | "Zap";

export interface ServiceFlowStep {
  title: string;
  description: string;
  icon: FlowIconName;
}

export const services = [
  {
    slug: "wedding",
    title: "חתונה",
    description:
      "דיג'יי לחתונה יוקרתית - עומר מזרחי מביא את האנרגיה המושלמת ליום המאושר בחייכם.",
    flow: [
      {
        title: "קבלת פנים",
        description:
          "מוזיקת רקע אלגנטית, עמוקה ומרגשת. מתחילים לבנות את הווייב.",
        icon: "Music",
      },
      {
        title: "חופה",
        description:
          "הלב דופק. תזמון מדויק של שיר הכניסה וסאונד מושלם.",
        icon: "Heart",
      },
      {
        title: "כניסה לאולם כזוג נשוי",
        description:
          "הרגע שלכם. אנרגיה מתפרצת בכניסה הראשונה שלכם יחד.",
        icon: "Star",
      },
      {
        title: "המסיבה",
        description:
          "הטירוף מתחיל. קריאת קהל חדה ואנרגיה שמתפוצצת ברחבה.",
        icon: "Flame",
      },
      {
        title: "אפטר פארטי",
        description:
          "למי שנשאר עד הסוף. ווליום עולה וסאונד של מועדון.",
        icon: "Zap",
      },
    ] satisfies ServiceFlowStep[],
  },
  {
    slug: "bar-mitzvah",
    title: "בר מצווה",
    description:
      "דיג'יי לבר מצווה - מסיבה בלתי נשכחת עם המוזיקה הכי מעודכנת.",
    flow: [
      {
        title: "קבלת פנים",
        description: "קבלת פנים מרשימה שבונה את האווירה לקראת הערב.",
        icon: "Music",
      },
      {
        title: "כניסת חתן הבר מצווה",
        description:
          "כניסה עוצמתית ומרגשת ששמה את חתן השמחה במרכז.",
        icon: "Star",
      },
      {
        title: "המסיבה",
        description:
          "להיטים חמים, רמיקסים מיוחדים ואנרגיה שמשאירה את כולם על הרחבה.",
        icon: "Flame",
      },
    ] satisfies ServiceFlowStep[],
  },
  {
    slug: "bat-mitzvah",
    title: "בת מצווה",
    description:
      "דיג'יי לבת מצווה - חגיגה מודרנית, מקפיצה ומותאמת אישית.",
    flow: [
      {
        title: "קבלת פנים",
        description: "אווירה קסומה וקצבית לקבלת האורחים.",
        icon: "Music",
      },
      {
        title: "כניסת כלת הבת מצווה",
        description: "כניסה מרהיבה ומלאת סטייל של כלת השמחה.",
        icon: "Sparkles",
      },
      {
        title: "המסיבה",
        description: "מסיבה בקצב גבוה עם כל השירים הכי עדכניים.",
        icon: "Flame",
      },
    ] satisfies ServiceFlowStep[],
  },
  {
    slug: "henna",
    title: "חינות",
    description:
      "דיג'יי לחינה - שילוב מנצח של מסורת עם ביטים מודרניים.",
    flow: [
      {
        title: "קבלת פנים",
        description:
          "מוזיקה אותנטית עם נגיעות מודרניות לקבלת האורחים.",
        icon: "Music",
      },
      {
        title: "מיני מסיבה",
        description: "חימום הרחבה לפני הטקס המסורתי.",
        icon: "Flame",
      },
      {
        title: "טקס החינה",
        description: "ליווי מוזיקלי מדויק ומרגש לטקס המסורתי.",
        icon: "Crown",
      },
      {
        title: "מסיבה",
        description:
          "חגיגה צבעונית, שמחה ובלתי פוסקת אל תוך הלילה.",
        icon: "PartyPopper",
      },
    ] satisfies ServiceFlowStep[],
  },
  {
    slug: "private-events",
    title: "אירועים פרטיים",
    description:
      "דיג'יי לאירועים פרטיים - ימי הולדת ומסיבות מכל סוג.",
    flow: [
      {
        title: "התאמה אישית מלאה",
        description:
          "אפיון מוזיקלי מדויק יחד איתכם, בניית הפלואו המושלם לאופי האירוע, והתאמת האנרגיה לקהל היעד שלכם.",
        icon: "Settings",
      },
    ] satisfies ServiceFlowStep[],
  },
  {
    slug: "corporate",
    title: "אירועים עסקיים",
    description:
      "דיג'יי לאירועי חברה והשקות - מיתוג מוזיקלי מדויק לעסק שלכם.",
    flow: [
      {
        title: "התאמה אישית מלאה",
        description:
          "אפיון מוזיקלי מדויק יחד איתכם, בניית הפלואו המושלם לאופי האירוע, והתאמת האנרגיה לקהל היעד שלכם.",
        icon: "Settings",
      },
    ] satisfies ServiceFlowStep[],
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

/** זרימת ברירת מחדל לדף הבית (חתונה) */
export function getHomepageEventFlowSteps(): readonly ServiceFlowStep[] {
  const wedding = services.find((s) => s.slug === "wedding");
  return wedding?.flow ?? [];
}
