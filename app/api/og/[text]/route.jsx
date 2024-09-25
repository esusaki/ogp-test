import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET(req, {params}) {
  const {text} = params;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: 'white',
          background: 'red',
          width: '100%',
          height: '100%',
          padding: '20px 30px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
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