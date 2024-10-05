'use client'
import { useEffect } from "react";

export default function Aiueo({params}){

    useEffect(
        ()=>{
            const timer = setTimeout(()=>{
            if (typeof window !== undefined){
                    window.location.href = '/';
                } 
            }, 1)
        }
    )

    const {message} = params;

    return (
        <div>
            <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
                <title>OGP sample</title>
                
                <meta property="og:title" content="OGP Demo"/>
                <meta property="og:description" content="OGPの表示の練習です"/>
                <meta
                    property="og:image"
                    // content="https://og-examples.vercel.sh/api/static"
                    content= {"https://ogp-test-omega.vercel.app/api/og/" + message}
                />
                <meta property = "og:image:width" content = "1200"/>
                <meta property = "og:image:height" content = "630"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="textval"/>

            </head>
            <body></body>
        </div>

    )
}

