import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';

import Hero from '@site/src/theme/Hero';
import Languages from '@site/src/theme/Languages';
import Launchpad from '@site/src/theme/Launchpad';
import Demos from '@site/src/theme/Demos';
import Resources from '@site/src/theme/Resources';

function Home() {
  return (
    <Layout
      title={`The Home of Palm Developers`}
      description="Learn all the best practices to get up and running with Palm in no time. Get started and discover the power of Palm, whether on your local machines or in the cloud.">
      <Hero />
    </Layout >
  );
}

export default Home;
