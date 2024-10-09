import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Layout from '../components/Layout'; // Asegúrate de que la ruta sea correcta

const Home: React.FC = () => {
  return (
    <Layout>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Bienvenido a GamerAssurance</p>
        </IonContent>
      </IonPage>
    </Layout>
  );
};

export default Home;