import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import HeroMain from '/img/undraw_docusaurus_mountain.svg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.hero_intro}>
        <h1 className={styles.hero_title}>
          <span style={{color:'var(--ifm-color-primary)'}}>SunlightLyn</span>'s Blog</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <p className="hero__subtitle"> 在这里写一些内容。 </p> */}
        {/* <MainButtons /> */}
      </div>
      <div className={styles.hero_svg}>
        <HeroMain />
      </div>
    </header>
  );
}

function MainButtons() {
  return (
    <div className={styles.buttons}>
      <Link
        className="button button--secondary button--lg"
        to="/docs/intro">
        📕 阅读文档
      </Link>
    </div>  
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="SunlightLyn's personal website.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
