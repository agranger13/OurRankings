import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

const PlayerQRCode = ({ playerId }) => {
  return (
    <div>
<QRCodeSVG
  value={playerId}
  title={"Votre QRCode personnel"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  marginSize={0}
  imageSettings={{
    src: require("../../assets/hibou.jpg"),
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    opacity: 1,
    excavate: true,
  }}
/>    </div>
  );
};

export default PlayerQRCode;