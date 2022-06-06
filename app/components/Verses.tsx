import { Text } from "~/components";

type VersesType = {
  chapter: number;
  description: string;
  verse: number;
};

export const Verses = ({ chapter, description, verse }: VersesType) => (
  <div className="border-b border-gray-200 dark:border-gray-800 py-10 px-8">
    <div className="text-center">
      <Text>
        {chapter}:{verse}
      </Text>
      <Text variant="lead">
        धृतराष्ट्र उवाच |<br /> धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |
        <br /> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
      </Text>
      <Text variant="h6">Transliteration</Text>
      <Text>
        dhṛitarāśhtra uvācha <br />
        dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ <br />
        māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya <br />
      </Text>
      <Text variant="h6">Anvaya</Text>
      <Text>
        dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of
        dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered;
        yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of
        Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do;
        sañjaya—Sanjay
      </Text>
      <Text variant="h6">Translation</Text>
      <Text>
        Dhritarashtra said: O Sanjay, after gathering on the holy field of
        Kurukshetra, and desiring to fight, what did my sons and the sons of
        Pandu do?
      </Text>
    </div>
  </div>
);
