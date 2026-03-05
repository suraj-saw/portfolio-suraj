import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import View from '@/model/views.model';

export async function GET() {
  try {
    await connectToDatabase();
    let viewDoc = await View.findOne();
    if (!viewDoc) {
      viewDoc = await View.create({ views: 0 });
    }
    return NextResponse.json({ views: viewDoc.views });
  } catch (error) {
    console.error('Views GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch views' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectToDatabase();
    let viewDoc = await View.findOne();
    if (!viewDoc) {
      viewDoc = await View.create({ views: 1 });
    } else {
      viewDoc.views += 1;
      await viewDoc.save();
    }
    return NextResponse.json({ views: viewDoc.views });
  } catch (error) {
    console.error('Views POST error:', error);
    return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 });
  }
}