import env from '../config.json'  assert {type: "json"};

const baseURL = `https://www.googleapis.com/youtube/v3`;

//@ts-ignore
export const getSearch = async  ({query, order}) => {
   const searchParams = {
      key: env.YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet',
      maxResults: '20',
      ...(order && { order }),
      query,
    };
    let searchParamsString = new URLSearchParams(searchParams).toString();
    const searchRes = await fetch(`${baseURL}/search?${searchParamsString}`);
    const getSearchID  = await searchRes.json();
    let IDArray = getSearchID.items?.map((video: any)  => video.id.videoId)
   let ids = IDArray.join(',')
    const videoParams = {
      key: env.YOUTUBE_API_KEY,
      part: "snippet,statistics",
      maxResults: '25',
      id: ids,
  };
  let videoParamsString = new URLSearchParams(videoParams).toString();
  const videoRes = await fetch(`${baseURL}/videos?${videoParamsString}`);
    const data = await videoRes.json();
    return data;

};

