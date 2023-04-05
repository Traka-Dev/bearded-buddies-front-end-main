import React, { useCallback, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Banner from "../../components/Banner";
import CountdownSection from '../../components/CountdownSection';
import SubscribeSection from '../../components/SubscribeSection';
import RoadmapSection from '../../components/RoadmapSection';
import RedRoseClanSection from '../../components/RedRoseClanSection';
import AboutUsSection from "../../components/AboutUsSection";
import TeamSection from '../../components/TeamSection';
import FaqSection from '../../components/FaqSection';
import Footer from '../../components/Footer';
import NftSection from '../../components/NftSection';
import BenefitsSection from '../../components/BenefitsSection';
import {isMobile} from 'react-device-detect';
import Loading from '../../components/Loading';
import { Helmet } from "react-helmet";

const targetDate = new Date(2022, 7, 6).getTime();

function Landing() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const handleVisible = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    /*
    if (isMobile) {
      setLoading(true);
      setVisible(true);
    }
    */
    setLoading(true);
    setVisible(true);
  }, [])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"  name="description" content="Bearded Buddies" />
        <title>Bearded Buddies</title>
      </Helmet>
      <Loading loading={loading && visible} />
      <Menu />
      <Banner handleVisible={handleVisible} />
      <CountdownSection targetDate={targetDate} />
      <SubscribeSection handleLoading={handleLoading} planet/>
      {visible ? (
        <>
        <AboutUsSection isMobile={isMobile} />
        <RedRoseClanSection />
        <BenefitsSection />
        <NftSection />
        <TeamSection />
        <FaqSection />
        <SubscribeSection />
        <Footer />
        </>
      ): null}
    </div>
  );
}

export default Landing;
