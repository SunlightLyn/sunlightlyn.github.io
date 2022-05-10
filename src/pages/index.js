import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import HeroMain from '/img/hero.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.hero_intro}>
        <div className={styles.hero_title}>
          <span style={{color:'var(--ifm-color-primary)'}}>SunlightLyn</span>'s Blog
        </div>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle"> 记录成长路上的点滴。 </p>
        <MainButtons />
      </div>
      <div className={styles.hero_svg}>
        <HeroMain />
        {/* <img src={'/img/hero.png'}/> */}
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
        <Link
          className="button button--secondary button--lg"
          to="/blog">
          🥽 阅读博客
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
