import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center m-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowlwdge-cafe</h1>
            <img src={profile} alt="" /> 
        </header>
    );
};

export default Header;