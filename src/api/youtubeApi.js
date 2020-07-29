const baseUrl = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDLyPIv8Bm_-P6yskFMOmNuYoYgIu-Ubbc';

export const searchVideos = async (q) => {
  try {
    const response = await fetch(
      `${baseUrl}/search?key=${API_KEY}&q=${q}&part=snippet&type=video`,
    );
    const data = await response.json();
    return data.items;
  } catch (e) {
    console.log(e);
  }
};
