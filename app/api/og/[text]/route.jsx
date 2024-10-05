import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET(req, {params}) {
  const {text} = params;
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: "url(https://ogp-test-omega.vercel.app/matsuri-background.png)",
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '20px 30px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}