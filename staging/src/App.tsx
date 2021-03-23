import React from 'react';
import { MenuHeaderBlock } from './components/MenuHeaderBlock';
import {InspiriesBlock} from "./components/InspiriesBlock";
import {SliderBlock} from "./components/SliderBlock";

export const App = () => {
  return (
      <>
          <MenuHeaderBlock />
          <InspiriesBlock />
          <SliderBlock />
      </>
  );
};
