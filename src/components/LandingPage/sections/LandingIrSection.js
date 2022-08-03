import React from 'react';
import IrContentsSlider from './IrContentsSlider';
import LandingInfoTitle from './LandingInfoTitle';

const LandingIrSection = () => {
  const title = "IR"
  const content = "VISION 22 미래 사외에 대한 영감,새로운 미래 창조. 메디슨의 경영현황을 신속하고 정확하게 제공합니다."
  return (
    <div>
      <LandingInfoTitle title={title} content={content} />
      <IrContentsSlider />
    </div>
  );
};

export default LandingIrSection;