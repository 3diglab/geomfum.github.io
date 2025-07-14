import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main className="hero text-center">
      <h1>Geomfum</h1>
      <p>A library for functional maps, geometry processing, and ML on shapes.</p>
      <div>
        <Link className="button button--primary margin--sm" to="/docs/intro">
          Get Started
        </Link>
        <Link className="button button--outline margin--sm" to="https://github.com/DiG-AIR/geomfum">
          GitHub
        </Link>
      </div>
    </main>
  );
}