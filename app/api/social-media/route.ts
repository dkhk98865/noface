import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { videoId, platforms, caption, scheduledTime } = await request.json();

    if (!videoId || !platforms || platforms.length === 0) {
      return NextResponse.json(
        { error: 'Video ID and platforms are required' },
        { status: 400 }
      );
    }

    const results = await publishToPlatforms({
      videoId,
      platforms,
      caption,
      scheduledTime
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Social media publishing error:', error);
    return NextResponse.json(
      { error: 'Failed to publish to social media' },
      { status: 500 }
    );
  }
}

async function publishToPlatforms({
  videoId,
  platforms,
  caption,
  scheduledTime
}: {
  videoId: string;
  platforms: string[];
  caption?: string;
  scheduledTime?: string;
}) {
  const results = [];

  for (const platform of platforms) {
    try {
      let result;
      
      switch (platform.toLowerCase()) {
        case 'youtube':
          result = await publishToYouTube(videoId, caption);
          break;
        case 'tiktok':
          result = await publishToTikTok(videoId, caption);
          break;
        case 'instagram':
          result = await publishToInstagram(videoId, caption);
          break;
        default:
          result = {
            platform,
            status: 'error',
            error: 'Unsupported platform'
          };
      }
      
      results.push(result);
    } catch (error) {
      results.push({
        platform,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  return {
    videoId,
    publishedAt: new Date().toISOString(),
    results
  };
}

async function publishToYouTube(videoId: string, caption?: string) {
  // In production, you would integrate with YouTube Data API v3
  /*
  const youtube = google.youtube({
    version: 'v3',
    auth: oauth2Client // Set up OAuth2 authentication
  });

  const response = await youtube.videos.insert({
    part: ['snippet', 'status'],
    requestBody: {
      snippet: {
        title: extractTitleFromCaption(caption) || 'NoFace Generated Short',
        description: caption || 'Created with NoFace AI',
        tags: ['shorts', 'ai-generated', 'noface'],
        categoryId: '22', // People & Blogs
        defaultLanguage: 'en'
      },
      status: {
        privacyStatus: 'public',
        selfDeclaredMadeForKids: false
      }
    },
    media: {
      body: videoFileStream
    }
  });

  return {
    platform: 'youtube',
    status: 'success',
    videoUrl: `https://youtube.com/shorts/${response.data.id}`,
    postId: response.data.id
  };
  */

  // Mock response for demo
  return {
    platform: 'youtube',
    status: 'success',
    videoUrl: `https://youtube.com/shorts/demo_${videoId}`,
    postId: `yt_${videoId}`,
    views: Math.floor(Math.random() * 10000),
    publishedAt: new Date().toISOString()
  };
}

async function publishToTikTok(videoId: string, caption?: string) {
  // In production, you would integrate with TikTok Content Posting API
  /*
  const tiktokApi = new TikTokAPI({
    clientKey: process.env.TIKTOK_CLIENT_KEY,
    clientSecret: process.env.TIKTOK_CLIENT_SECRET,
    accessToken: userAccessToken
  });

  const response = await tiktokApi.video.upload({
    video: videoFileBuffer,
    text: caption || 'Created with NoFace AI #AI #shorts',
    privacy_level: 'PUBLIC_TO_EVERYONE',
    disable_duet: false,
    disable_comment: false,
    disable_stitch: false,
    video_cover_timestamp_ms: 1000
  });

  return {
    platform: 'tiktok',
    status: 'success',
    videoUrl: response.data.share_url,
    postId: response.data.video_id
  };
  */

  // Mock response for demo
  return {
    platform: 'tiktok',
    status: 'success',
    videoUrl: `https://tiktok.com/@user/video/demo_${videoId}`,
    postId: `tt_${videoId}`,
    views: Math.floor(Math.random() * 50000),
    publishedAt: new Date().toISOString()
  };
}

async function publishToInstagram(videoId: string, caption?: string) {
  // In production, you would integrate with Instagram Basic Display API / Graph API
  /*
  const instagramApi = new InstagramAPI({
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN
  });

  // Step 1: Create media container
  const containerResponse = await instagramApi.post('/me/media', {
    media_type: 'REELS',
    video_url: videoPublicUrl,
    caption: caption || 'Created with NoFace AI #reels #ai'
  });

  // Step 2: Publish the media
  const publishResponse = await instagramApi.post('/me/media_publish', {
    creation_id: containerResponse.data.id
  });

  return {
    platform: 'instagram',
    status: 'success',
    videoUrl: `https://instagram.com/reel/${publishResponse.data.id}`,
    postId: publishResponse.data.id
  };
  */

  // Mock response for demo
  return {
    platform: 'instagram',
    status: 'success',
    videoUrl: `https://instagram.com/reel/demo_${videoId}`,
    postId: `ig_${videoId}`,
    views: Math.floor(Math.random() * 25000),
    publishedAt: new Date().toISOString()
  };
}

function extractTitleFromCaption(caption?: string): string {
  if (!caption) return '';
  
  // Extract first sentence or first 60 characters as title
  const firstSentence = caption.split('.')[0];
  return firstSentence.length <= 60 
    ? firstSentence 
    : caption.substring(0, 57) + '...';
}

