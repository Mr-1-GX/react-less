
import { useState } from 'react'

import Welcome from '../../components/Welcome'
import Greeting from '../../components/Greeting'

const HomeContent = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    const renderContent = () => {
        let content;

        if (showWelcome) {
            content = <Welcome user="giorgi" age={36} />
        } else {
            content = <Greeting massage="I M Come" ansver="You ar Best" />
        }

        return content;
    }
    const fingerClick = () => {
        console.log('_showWelcome_', showWelcome)
        setShowWelcome(!showWelcome)
    }
    return (
        <>
            <button
                className='btn btn-primary'
                onClick={fingerClick}
            >
                ჩააჭირე
            </button>
            {renderContent()}
        </>
    )
}

export default HomeContent;