import env from '../config.json'  assert {type: "json"};

const baseURL = `https://www.googleapis.com/youtube/v3`;

//@ts-ignore
export const getSearch = async  ({query, order}) => {
   const params = {
        key: env.YOUTUBE_API_KEY,
       type: 'video',
       part: 'snippet',
       maxResults: '20',
       ...(order && { order }),
       query,
    };
    let paramsString = new URLSearchParams(params).toString();
    const response = await fetch(`${baseURL}/search?${paramsString}`);
    return await response.json();
};

