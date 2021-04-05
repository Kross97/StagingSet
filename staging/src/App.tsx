import React from 'react';
import { MenuHeaderBlock } from './components/MenuHeaderBlock';
import {InspiriesBlock} from "./components/InspiriesBlock";
import {SliderBlock} from "./components/SliderBlock";
import { FeaturesBlock } from "./components/FeaturesBlock";
import { ContactBlock } from './components/ContactBlock';
import { MostProjectsBlock } from './components/MostProjectsBlock';
import { VirtualStaging } from './components/VirtualStaging';
import { SrectacularBlock } from './components/SpectacularBlock';
import { OfferingBlock } from './components/OfferingBlock';
import { VirtualStaging2 } from "./components/VirtualStaging2";
import { DigitalHome } from "./components/DigitalHome";
import { FaqBlock } from "./components/FaqBlock";
import { FooterBlock } from "./components/FooterBlock";

export const App = () => {
  return (
      <>
          <MenuHeaderBlock />
          <InspiriesBlock />
          <SliderBlock />
          <FeaturesBlock />
          <ContactBlock />
          <MostProjectsBlock />
          <VirtualStaging />
          <SrectacularBlock />
          <OfferingBlock />
          <VirtualStaging2 />
          <DigitalHome />
          <FaqBlock />
          <FooterBlock />
      </>
  );
};
