import Welcome from '../components/Welcome';

export default WelcomePage = () => {
    const [firstName, setFirstName] = useState('');

    useEffect(async() => {
        if (response.successful) {
            setVerified(true);
            localStorage.setItem('token', response.data.Token);
            localStorage.setItem('tokenExpiryDate', response.data.TokenExpiryDate);
        }
        const user = JSON.parse(localStorage.getItem('user'));
        setFirstName(user.firstName)
    });
    
    return (
        <Welcome firstName={firstName}/>
    );
}