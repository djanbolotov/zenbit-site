import React from "react";
import { DotWrapper, Dot, Loading } from './styles/Loader';

function Loader() {
    return (
      <DotWrapper>
          <Loading>Loading</Loading>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    )
}
export default Loader;