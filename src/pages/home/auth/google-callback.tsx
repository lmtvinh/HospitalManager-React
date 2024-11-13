import { useGoogleResponse } from '@/services/api';

export default function GoogleCallback() {
    const { data } = useGoogleResponse({
        query:{
            retry:false,
            retryOnMount:false,
            refetchOnMount:false,
            refetchOnWindowFocus:false,
        }
    });
    return <div>Loading</div>;
}
