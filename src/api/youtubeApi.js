const baseUrl = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDLyPIv8Bm_-P6yskFMOmNuYoYgIu-Ubbc';

const items = {
  "kind": "youtube#searchListResponse",
  "etag": "36zlU63wT4TboQQewI_lmi5wWQY",
  "nextPageToken": "CAUQAA",
  "regionCode": "IL",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [{
      "kind": "youtube#searchResult",
      "etag": "ApF72SmdQGS4MIlR2A0rMN20Wvw",
      "id": {
        "kind": "youtube#video",
        "videoId": "wXhTHyIgQ_U"
      },
      "snippet": {
        "publishedAt": "2019-09-03T17:00:11Z",
        "channelId": "UCOhtMAg7xh8wv_wUHMgFc-Q",
        "title": "Post Malone - Circles",
        "description": "Official music video by Post Malone performing “Circles” – off his new album 'Hollywood's Bleeding' available now: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "PostMaloneVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2019-09-03T17:00:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "txeJlxueb4_oLC2cQemfXpSXA0E",
      "id": {
        "kind": "youtube#video",
        "videoId": "G42RJ4mKj1k"
      },
      "snippet": {
        "publishedAt": "2020-07-29T19:00:05Z",
        "channelId": "UCzQUP1qoWDoEbmsQxvdjxgQ",
        "title": "Joe Rogan Experience #1516 - Post Malone",
        "description": "Post Malone is a singer-songwriter, rapper and record producer. @Post Malone.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/G42RJ4mKj1k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/G42RJ4mKj1k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/G42RJ4mKj1k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "PowerfulJRE",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-29T19:00:05Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "N2zvcLgEpp_Xix2htGFHouOcREE",
      "id": {
        "kind": "youtube#video",
        "videoId": "SC4xMk98Pdc"
      },
      "snippet": {
        "publishedAt": "2017-01-23T18:00:30Z",
        "channelId": "UCOhtMAg7xh8wv_wUHMgFc-Q",
        "title": "Post Malone - Congratulations ft. Quavo",
        "description": "Congratulations ft. Quavo (Official Video) Taken from the album Stoney Song available here: https://PostMalone.lnk.to/StoneyStandardYD Best of Post Malone ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SC4xMk98Pdc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SC4xMk98Pdc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SC4xMk98Pdc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "PostMaloneVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2017-01-23T18:00:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "x3qlBJIrhPRFlk3j4AnYUNK-Qh4",
      "id": {
        "kind": "youtube#video",
        "videoId": "nEmehcK7KfQ"
      },
      "snippet": {
        "publishedAt": "2020-06-12T16:00:11Z",
        "channelId": "UC_Fwpd_kB5HZQtsmF9VXI5g",
        "title": "Tyla Yaweh - Tommy Lee (Official Music Video) ft. Post Malone",
        "description": "\"Tommy Lee\" available at: https://TylaYaweh.lnk.to/Tommy_Lee Official Audio: https://youtu.be/4Do9gZpLnfg Produced by BeatGod XL / RVNES / Pearl Lion ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nEmehcK7KfQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nEmehcK7KfQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nEmehcK7KfQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "TylaYawehVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-12T16:00:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BKh7F3SsOSb5aPv3XlJ_KsYW1Ho",
      "id": {
        "kind": "youtube#video",
        "videoId": "UYwF-jdcVjY"
      },
      "snippet": {
        "publishedAt": "2018-10-05T17:46:29Z",
        "channelId": "UCOhtMAg7xh8wv_wUHMgFc-Q",
        "title": "Post Malone - Better Now",
        "description": "Better Now (Official Video) Get The Song Here: https://PostMalone.lnk.to/bbYD Connect with Post Malone: https://www.facebook.com/postmalone ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UYwF-jdcVjY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UYwF-jdcVjY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UYwF-jdcVjY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "PostMaloneVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2018-10-05T17:46:29Z"
      }
    }
  ]
}


export const searchVideos = async (q) => {
  try {
    // const response = await fetch(
    //   `${baseUrl}/search?key=${API_KEY}&q=${q}&part=snippet&type=video`,
    // );
    // const data = await response.json();
    // console.log(data)
    // return data.items;
    return items.items;
  } catch (e) {
    console.log(e);
  }
};