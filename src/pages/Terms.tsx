import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Les présentes conditions générales de vente régissent l'utilisation des services proposés par Al Amal Immobilier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="mb-4">
            Al Amal Immobilier propose des services d'intermédiation immobilière, incluant mais non limité à :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Vente et achat de biens immobiliers</li>
            <li>Location de propriétés</li>
            <li>Gestion immobilière</li>
            <li>Conseil en investissement immobilier</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Tarifs et Paiements</h2>
          <p className="mb-4">
            Les honoraires et frais de services sont communiqués de manière transparente avant toute prestation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Responsabilités</h2>
          <p className="mb-4">
            Al Amal Immobilier s'engage à fournir ses services avec professionnalisme et diligence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
