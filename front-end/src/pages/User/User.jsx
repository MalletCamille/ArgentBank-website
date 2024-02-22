import { useState, useEffect } from 'react';
import Button from '../../../src/components/Button/Button.jsx'
import Account from '../../components/Account/Account.jsx'
import '../../index.css'

function User () {

 // Définition d'un état pour stocker les données des comptes
 const [accounts, setAccounts] = useState([]);

 // Appel à l'API pour récupérer les données des comptes
 useEffect(() => {
   // Fonction pour effectuer l'appel à l'API
   const fetchData = async () => {
     try {
       const response = await fetch('https://');
       const data = await response.json();
       setAccounts(data);
     } catch (error) {
       console.error('Error fetching account data:', error);
     }
   };

   // Appel de la fonction pour récupérer les données des comptes au chargement du composant
   fetchData();
 }, []);

return (
        <main className="main bg-dark">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <Button>   
            </Button>
            <Account accounts={accounts} />    
        </main>
)
}

export default User