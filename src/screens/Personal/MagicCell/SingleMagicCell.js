/* @flow */
import React from "react";

type Props = {|
  deckName: string,
  imgName: string,
|};

export function MagicCell(props: Props) {
  return (
    <div className="magic-cell">
      <img src={`images/magic/${props.imgName}.jpg`} alt={props.imgName} />
      {props.deckName}
    </div>
  );
}

export default MagicCell;
