import MainNavigation from "@/../Components/MainNavigation/MainNavigation";
import WhyIstanbul from "@/../Components/WhyIstanbul/WhyIstanbul";
import WhyDogs from "@/../Components/WhyDogs/WhyDogs";
import DogsMap from "@/../Components/DogsMap/DogsMap";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const markers = [
  {
    markerOffset: 15,
    name: "Ancient West",
    coordinates: [12.4964, 41.9028],
  },
  {
    markerOffset: -15,
    name: "Pre-modern East",
    coordinates: [139.65, 35.6764],
  },
  {
    markerOffset: -15,
    name: "Modern Bali",
    coordinates: [115.188919, -8.409518],
  },
  {
    markerOffset: -15,
    name: "Modern India",
    coordinates: [77.209, 28.6139],
  },
  {
    markerOffset: -15,
    name: "Ottoman Istanbul",
    coordinates: [28.9784, 41.0082],
  },
];
export default function StoryPage() {
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
          <Tab>why Dogs?</Tab>
          <Tab>dogs everywhere</Tab>
          <Tab>why Turkey?</Tab>
          <Tab>why Istanbul?</Tab>
        </TabList>

        <TabPanel>
          <WhyDogs />
        </TabPanel>
        <TabPanel>
          <DogsMap />
        </TabPanel>
        <TabPanel>
          <p>the relationship between islam and animals</p>
        </TabPanel>
        <TabPanel>
          <WhyIstanbul />
        </TabPanel>
      </Tabs>
    </div>
  );
}
