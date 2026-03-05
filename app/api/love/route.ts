import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import LoveCount from '@/model/loveCount.model';

export async function GET() {
  try {
    await connectToDatabase();
    let loveDoc = await LoveCount.findOne();
    if (!loveDoc) {
      loveDoc = await LoveCount.create({ count: 0 });
    }
    return NextResponse.json({ count: loveDoc.count });
  } catch (error) {
    console.error('Love GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch love count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectToDatabase();
    let loveDoc = await LoveCount.findOne();
    if (!loveDoc) {
      loveDoc = await LoveCount.create({ count: 1 });
    } else {
      loveDoc.count += 1;
      await loveDoc.save();
    }
    return NextResponse.json({ count: loveDoc.count });
  } catch (error) {
    console.error('Love POST error:', error);
    return NextResponse.json({ error: 'Failed to increment love count' }, { status: 500 });
  }
}