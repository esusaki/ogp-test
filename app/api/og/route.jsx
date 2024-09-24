import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          color: 'white',
          background: 'red',
          width: '100%',
          height: '100%',
          padding: '50px 100px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          おまつりでい！
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}