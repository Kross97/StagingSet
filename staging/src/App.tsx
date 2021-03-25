import React from 'react';
import { MenuHeaderBlock } from './components/MenuHeaderBlock';
import {InspiriesBlock} from "./components/InspiriesBlock";
import {SliderBlock} from "./components/SliderBlock";
import { FeaturesBlock } from "./components/FeaturesBlock";

export const App = () => {
  return (
      <>
          <MenuHeaderBlock />
          <InspiriesBlock />
          <SliderBlock />
          <FeaturesBlock />
      </>
  );
};
