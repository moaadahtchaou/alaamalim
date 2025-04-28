import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Questions Fréquemment Posées</h1>
      <div className="space-y-6">
        {/* Add FAQ items here */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Comment puis-je rechercher une propriété ?</h2>
          <p className="text-gray-600">
            Vous pouvez utiliser notre outil de recherche avancée pour trouver des propriétés selon vos critères spécifiques tels que l'emplacement, le prix, et le type de bien.
          </p>
        </div>
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Quels sont vos services immobiliers ?</h2>
          <p className="text-gray-600">
            Nous offrons une gamme complète de services immobiliers incluant la vente, la location, la gestion locative, et le conseil en investissement immobilier.
          </p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
