import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function GET(
  _request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width, 10)
  const height = parseInt(params.height, 10)

  if (isNaN(width) || isNaN(height)) {
    return NextResponse.json({ error: 'Invalid dimensions' }, { status: 400 })
  }

  try {
    const image = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 200, g: 200, b: 200, alpha: 0.5 }
      }
    })
    .png()
    .toBuffer()

    return new NextResponse(image, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400'
      }
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
