export default async function aiueo({params}){
    
    const {message} = params;

    return (
        <html>
            <head>
                <title>OGP sample</title>
                <meta
                    property="og:image"
                    // content="https://og-examples.vercel.sh/api/static"
                    content= {"https://ogp-test-omega.vercel.app/api/og/よいしょよいしょ！"}
                />
            </head>
            <body>hello, {decodeURI(message)}! </body>
        </html>

    )
}

