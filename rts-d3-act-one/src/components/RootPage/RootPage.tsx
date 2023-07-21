import { Link, Outlet } from 'react-router-dom'

const RootPage: React.FC = () => {
    return (
        <header className='container'>
            <h2 className='nav'><Link to="/">Pokedex</Link></h2>
            <div className='nav-link'>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/profile">Profile</Link></p>
            </div>
            <main>
                {/* nagrerender nung mga nasa routes */}
                <Outlet />
            </main>
        </header>
    );
};

export default RootPage;