import { getStore } from `@netlify/blobs`;
import { useEffect } from 'react';

export default async function({test, value}){
    let store = getStore({
        name: "testing",
        siteID: process.env.SITE_ID,
        token: process.env.ACCESSS_TOKEN
    })
    let isBlob = false
    
    await store.set(test, value)
    console.log(await store.get(test))
    
    return(
        <div>
        {isBlob ? (
        <p>"Blob is working"</p>
        ) : (
            <p>"Blob is not working"</p>
        )}
        </div>
    )
}