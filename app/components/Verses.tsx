import { Text } from "~/components";

type VersesType = {
  chapter: number;
  description: string;
  verse: number;
};

export const Verses = ({ chapter, description, verse }: VersesType) => (
  <div className="border-b border-gray-100 dark:border-gray-800 py-10">
    <div className="text-center">
      <Text>
        {chapter}:{verse}
      </Text>
      <Text variant="lead">
        धृतराष्ट्र उवाच |<br /> धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |
        <br /> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
      </Text>
      <Text variant="lead">
        dhṛitarāśhtra uvācha <br />
        dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ <br />
        māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya <br />
      </Text>
    </div>
  </div>
);
