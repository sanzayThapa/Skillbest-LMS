const BUNNY_API_KEY = process.env.BUNNY_API_KEY;
const BUNNY_LIBRARY_ID = process.env.BUNNY_LIBRARY_ID;
const BUNNY_CDN_HOSTNAME = process.env.BUNNY_CDN_HOSTNAME || 'vz-1234.b-cdn.net'; // Example

const BASE_URL = `https://video.bunnycdn.com/library/${BUNNY_LIBRARY_ID}/videos`;

export const uploadVideo = async (title: string, file: Blob) => {
    if (!BUNNY_API_KEY || !BUNNY_LIBRARY_ID) {
        throw new Error("Missing Bunny.net credentials");
    }

    // 1. Create Video Object
    const createResponse = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'AccessKey': BUNNY_API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ title }),
    });

    if (!createResponse.ok) {
        throw new Error('Failed to create video object in Bunny.net');
    }

    const videoData = await createResponse.json();
    const videoId = videoData.guid;

    // 2. Upload Video Content
    const uploadUrl = `${BASE_URL}/${videoId}`;
    const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
            'AccessKey': BUNNY_API_KEY,
            'Content-Type': 'application/octet-stream',
        },
        body: file,
    });

    if (!uploadResponse.ok) {
        throw new Error('Failed to upload video content to Bunny.net');
    }

    return { videoId, ...videoData };
};

export const deleteVideo = async (videoId: string) => {
    if (!BUNNY_API_KEY || !BUNNY_LIBRARY_ID) {
        throw new Error("Missing Bunny.net credentials");
    }

    const response = await fetch(`${BASE_URL}/${videoId}`, {
        method: 'DELETE',
        headers: {
            'AccessKey': BUNNY_API_KEY,
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete video from Bunny.net');
    }

    return true;
};

export const getVideoUrl = (videoId: string) => {
    return `https://${BUNNY_CDN_HOSTNAME}/${videoId}/playlist.m3u8`;
};
