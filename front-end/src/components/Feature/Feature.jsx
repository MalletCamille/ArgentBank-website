import React from 'react';
import FeatureItem from '../../components/FeatrureItem/FeatureItem.jsx'
import iconChat from '../../../src/designs/img optimisées/icon-chat.webp';
import iconMoney from '../../../src/designs/img optimisées/icon-money.webp';
import iconSecurity from '../../../src/designs/img optimisées/icon-security.webp';

function Feature() {
  const features = [
    {
      icon: iconChat,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: iconMoney,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: iconSecurity,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

export default Feature;
