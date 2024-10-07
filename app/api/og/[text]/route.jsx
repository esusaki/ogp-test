import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

const font = fetch(
  new URL("/assets/Kouzan.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
 
export async function GET(req, {params}) {
  const {text} = params;
  const fontData = await font;
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: "url(https://ogp-test-omega.vercel.app/matsuri_background.png)",
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          padding: '20px 30px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily:'"Kouzan"',
          fontSize: 50
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts : [
        {
          name : "Kouzan",
          data : fontData,
          style : "normal"
        }
      ]
    },
  );
}