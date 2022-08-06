import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';

import Hero from '@site/src/theme/Hero';

function Home() {
  return (
    <Layout
      title={`The Palm Network`}
      description="Assert ultimate dominance on the NFT world.">
      <Hero />
    </Layout >
  );
}

export default Home;
