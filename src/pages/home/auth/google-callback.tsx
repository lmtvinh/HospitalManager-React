import { useGoogleResponse } from '@/services/api';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoogleCallback() {
    const { data } = useGoogleResponse({
        query:{
            retry:false,
            retryOnMount:false,
            refetchOnMount:false,
            refetchOnWindowFocus:false,
        }
    });
    const navigate = useNavigate();
    React.useEffect(() => {
        // Todo: login user
    }, [data]);
    return <div>Loading</div>;
}
