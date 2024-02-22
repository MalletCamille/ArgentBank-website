import Banner from '../../components/Banner/Banner.jsx'
import Feature from '../../components/Feature/Feature.jsx'
import { Fragment } from 'react'
import '../../index.css'

function Home() {    
    return (
        <Fragment>
            <Banner 
                subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} 
                text="Open a savings account with Argent Bank today!" 
            />
            <Feature />
        </Fragment>    
    )
}

export default Home
