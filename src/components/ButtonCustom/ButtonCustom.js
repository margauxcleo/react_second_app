import './ButtonCustom.css';

const ButtonCustom = (props) => {
    // on stocke la fonction de App handleOnClick dans la const gestionClick
    // const gestionClick = props.handleOnClick;

    // const afficheCouleurParent = props.couleurParent;
    //on arrive à afficher le contenu de la variable couleur qui est définie dans App parce que App est le parent de ButtonCustom
    // afficheCouleurParent();

    // en appelant directement la fonction, on peut faire:
    props.couleurParent();

    //return <button onClick={gestionClick}> Déclencher une alerte ! </button>
    //idem ici, on peut faire l'appel à la fonction de cette façon, plus concise, sans le declarer au préalable dans une const en local:
    return <button onClick={props.handleOnClick}> Déclencher une alerte ! </button>
};

export default ButtonCustom;