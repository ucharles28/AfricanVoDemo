import { useRouter } from 'next/router';
import { get } from '../../helpers/ApiRequest';
import Verify from '../../components/Verify';


export default function VerifyPage() {
    const { query } = useRouter();
    const token = parseInt(query.token);

    return (
        <Verify token={token} />
       );
}