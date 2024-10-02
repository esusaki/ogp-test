'use client'
import { useEffect } from "react";

export default async function aiueo({params}){

        if (typeof window !== undefined){
                window.location.href = '/';
            }

    const {message} = params;

    return (
        <html>
            <head>
                <title>OGP sample</title>
                <meta property="og:title" content="OGP Demo"/>
                <meta property="og:description" content="OGPの表示の練習です"/>
                <meta
                    property="og:image"
                    // content="https://og-examples.vercel.sh/api/static"
                    content= {"https://ogp-test-omega.vercel.app/api/og/" + message}
                />
            </head>
            <body>redirecting...</body>
        </html>

    )
}

