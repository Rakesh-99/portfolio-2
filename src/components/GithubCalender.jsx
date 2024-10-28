import Githubcalender from 'react-github-calendar';
import { useSelector } from 'react-redux';

const GithubCalender = () => {

    const { theme } = useSelector((state) => state.themeToggle);




    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center md:text-4xl lg:text-4xl my-10  text-3xl font-bold  bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-violet-600 inline-block text-transparent">Days I code </h1>
                <Githubcalender username="Rakesh-99" colorScheme={`${theme === 'dark' ? 'dark' : 'light'}`} />
            </div>
        </>
    )
}

export default GithubCalender;