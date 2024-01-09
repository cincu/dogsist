import DogsMap from "@/../Components/DogsMap/DogsMap";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
export default function MapPage() {
  return (
    <div className="main">
      <Tabs>
        <TabList
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5rem",
            listStyle: "none",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Tab>Past</Tab>
          <Tab>Present</Tab>
        </TabList>

        <TabPanel>
          <p>
            Feral dogs, street dogs have existed from Judeo-Christian traditions
            in European contexts to Asia and Eurasia who had very different
            culture and religions in history. The joint factor is that all
            societies across the globe has experienced a history of capitalism
            that also includes colonialism, imperialism and neo-colonialism
            which shifted how humans perceive this social community that has
            long existed among humans. These street dogs that could be stray
            dogs, free-roaming dogs with or without owners, were with humans
            before streets existed (Alkan, 2016). James Serpell (1995) says;
            ‘the existence of feral dogs, and the widespread cruelty,
            intolerance and indifference that dogs experience throughout the
            world, serves to illustrate the curious ambivalence of human
            attitudes towards this affectionate and supremely useful animal’.
            Even though the topic remains controversial, it is crucial to know
            the historical examples to understand how humans created streets and
            decided that as an indicator of modernity and civilization, these
            spaces should be clean and free of non-human animals; in this case
            dogs. The objective of this topic is to inform the readers that dogs
            existed thousands of years before as a part of the society, whether
            similar to current accepted concepts or completely different.
          </p>
          <ul>
            <li>Ancient West✅</li>
            <li>Ancient East✅</li>
            <li>Istanbul✅</li>
            <li>Native Americans❔</li>
            <li>Celtics❔</li>
            <li>Egypt❔</li>
          </ul>
          <p>
            it is important to give examples from different religions,
            geographies, colonial, indigenous and modern civilizations
          </p>
        </TabPanel>
        <TabPanel>
          <h4>Existing Free Roamers</h4>
          <p>
            The existence of non-human entities in the urban environment creates
            many opportunities to experience the city from a different
            perspective. However, the contexts are limited with usually
            developing or under-developed countries where there is a lack of
            proper laws and regulations subjected to the street animals.
            Furthermore, the general census on the issue is mostly opposing this
            idea. The process of globalization of the cities suggests clearing
            all the non-human entities from the cities. This act of
            extermination is supported by many sociological, political and
            sometimes religious notions. It is an undeniable fact that when
            uncontrolled, unfed and neglected, street dogs may and most probably
            cause danger to their environments, at minimum when these animals
            (cats and dogs) will over-populate, they would lead to many problems
            for both humans and their selves. Naranyan suggests; A healthy
            approach would be while trying to rehabilitate the situation ‘how we
            can respect these non-human creatures’ natures and their needs in
            the world we control’. In this notion, the object of these examples
            below are not given to prove a specific point but rather to
            familiarize readers the different conditions and regulations the
            dogs are subjected in different cultural contexts. The reality of
            the street dogs is multi-dimensional and complex, comparing to a
            controlled companion dog. The current state of the dogs with
            explanation of sanitary, modernisation, colonialisation and
            capitalism topics. The map shown will have 3 colors : dogs exist,
            dogs do not exist and NA. the countries that do not have free
            roaming urban dog populations will have the dates of extermination
            marked.
          </p>
          <ul>
            <li>Bali✅</li>
            <li>India✅</li>
            <li>Istanbul✅</li>
            <li>Mexico❔</li>
            <li>Balkans?</li>
            <li>❔</li>
          </ul>
          <DogsMap />
        </TabPanel>
      </Tabs>
    </div>
  );
}
