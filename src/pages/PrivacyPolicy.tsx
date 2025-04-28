import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Collecte des Informations</h2>
          <p>Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez nos services, notamment :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Vos coordonnées (nom, prénom, email, téléphone)</li>
            <li>Vos préférences de recherche immobilière</li>
            <li>Les informations relatives à vos demandes de service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Utilisation des Informations</h2>
          <p>Nous utilisons vos informations pour :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Vous fournir nos services immobiliers</li>
            <li>Personnaliser votre expérience</li>
            <li>Communiquer avec vous concernant nos services</li>
            <li>Améliorer nos services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Protection des Données</h2>
          <p>Nous prenons la protection de vos données personnelles très au sérieux. Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Vos Droits</h2>
          <p>Conformément à la loi, vous disposez des droits suivants :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
          <p>Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter :</p>
          <div className="mt-2">
            <p>Email : contact@alamal-immobilier.ma</p>
            <p>Téléphone : [Votre numéro de téléphone]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
