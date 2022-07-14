import { useRouter } from 'next/router'
import { get } from '../../helpers/api'
import Verify from '../../components/Verify'


export default Verify = () => {
    const { query } = useRouter();
    const token = parseInt(query.token);

    return (
        <Verify token={token} />
       );
}