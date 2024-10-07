import { ImageResponse } from 'next/og';
import fs from "fs";
import { NextRequest } from 'next/server';
import path from 'path';
// App router includes @vercel/og.
// No need to install it.

export async function GET(req, {params}) {
  const {text} = params;

const fontPath = path.join(process.cwd(), 'app', 'fonts', 'Kouzan.ttf');
const fontData = fs.readFileSync(fontPath);

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
          name : "KouzanBrushFont",
          data : fontData
        }
      ]
    },
  );
}