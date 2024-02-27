import '../../index.css'
import {Link} from 'react-router-dom'

function Error () {
return (
    <div className='error__container'>
        <span className='error__404'>Error 404</span>
        <span className='error__txt'>Oups ! La page que vous demandez n'existe pas.</span>
        <Link className='error__link' to="/">Retourner sur la page d'accueil</Link> 
    </div>
)
}

export default Error