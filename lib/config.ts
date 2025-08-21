// Environment configuration for NoFace API integrations

export const config = {
  // OpenAI Configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4',
    maxTokens: 500,
    temperature: 0.7,
  },

  // ElevenLabs Configuration
  elevenlabs: {
    apiKey: process.env.ELEVENLABS_API_KEY,
    defaultVoiceId: process.env.ELEVENLABS_DEFAULT_VOICE_ID || 'default',
    model: 'eleven_monolingual_v1',
  },

  // Social Media API Configuration
  youtube: {
    clientId: process.env.YOUTUBE_CLIENT_ID,
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
    redirectUri: process.env.YOUTUBE_REDIRECT_URI,
    scopes: ['https://www.googleapis.com/auth/youtube.upload'],
  },

  tiktok: {
    clientKey: process.env.TIKTOK_CLIENT_KEY,
    clientSecret: process.env.TIKTOK_CLIENT_SECRET,
    redirectUri: process.env.TIKTOK_REDIRECT_URI,
  },

  instagram: {
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
    businessAccountId: process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID,
  },

  // Database Configuration
  database: {
    url: process.env.DATABASE_URL,
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    expiresIn: '7d',
  },

  // Application Settings
  app: {
    environment: process.env.NODE_ENV || 'development',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    debug: process.env.DEBUG === 'true',
  },

  // Video Processing Settings
  video: {
    maxDuration: 60, // seconds
    resolution: '1080x1920', // 9:16 aspect ratio for shorts
    format: 'mp4',
    quality: 'high',
    subtitleFont: 'Arial',
    subtitleSize: 24,
  },

  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // limit each IP to 100 requests per windowMs
  },
};

// Validation function to check required environment variables
export function validateConfig() {
  const requiredEnvVars = [
    'OPENAI_API_KEY',
    'ELEVENLABS_API_KEY', 
    'JWT_SECRET_KEY',
  ];

  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missingVars.join(', ')}`
    );
    console.warn('Some features may not work properly.');
  }

  return missingVars.length === 0;
}

