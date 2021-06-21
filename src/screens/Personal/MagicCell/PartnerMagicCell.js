/* @flow */
import React from "react";

type Props = {|
  backImgName: string,
  deckName: string,
  frontImgName: string,
|};

export function PartnerMagicCell(props: Props) {
  return (
    <div className="magic-cell">
      <div className="magic-partners">
        <img
          src={`images/magic/${props.frontImgName}.jpg`}
          alt={props.frontImgName}
        />
        <img
          src={`images/magic/${props.backImgName}.jpg`}
          alt={props.backImgName}
        />
      </div>
      {props.deckName}
    </div>
  );
}

export default PartnerMagicCell;
