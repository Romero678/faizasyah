const cheerio = require('cheerio')
const { default: Axios, default: axios } = require('axios')

userAgent = () => {
     const os = [
          'Macintosh; Intel Mac OS X 10_15_7',
          'Macintosh; Intel Mac OS X 10_15_5',
          'Macintosh; Intel Mac OS X 10_11_6',
          'Macintosh; Intel Mac OS X 10_6_6',
          'Macintosh; Intel Mac OS X 10_9_5',
          'Macintosh; Intel Mac OS X 10_10_5',
          'Macintosh; Intel Mac OS X 10_7_5',
          'Macintosh; Intel Mac OS X 10_11_3',
          'Macintosh; Intel Mac OS X 10_10_3',
          'Macintosh; Intel Mac OS X 10_6_8',
          'Macintosh; Intel Mac OS X 10_10_2',
          'Macintosh; Intel Mac OS X 10_10_3',
          'Macintosh; Intel Mac OS X 10_11_5',
          'Windows NT 10.0; Win64; x64',
          'Windows NT 10.0; WOW64',
          'Windows NT 10.0',
     ];

     return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(
          Math.random() * 3,
     ) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}
function tiktokstalk(user) {
     return new Promise(async (resolve, reject) => {
          const getDataFirst = await Axios.get('https://www.tiktok.com')
          const newCookie = getDataFirst.headers['set-cookie'].join('')
          Axios.get(`https://www.tiktok.com/${user}`, {
               headers: {
                    'user-agent': userAgent(),
                    'Cookie': newCookie
               }
          })
               .then((data) => {
                    const $ = cheerio.load(data.data)
                    const ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
                    const result = {
                         status: true,
                         id: ttdata.props.pageProps.userInfo.user.id,
                         avatar: ttdata.props.pageProps.userInfo.user.avatarLarger,
                         username: ttdata.props.pageProps.userInfo.user.uniqueId,
                         followerCount: ttdata.props.pageProps.userInfo.stats.followerCount,
                         followingCount: ttdata.props.pageProps.userInfo.stats.followingCount,
                         heart: ttdata.props.pageProps.userInfo.stats.heart,
                         heartCount: ttdata.props.pageProps.userInfo.stats.heartCount,
                         videoCount: ttdata.props.pageProps.userInfo.stats.videoCount,
                         diggCount: ttdata.props.pageProps.userInfo.stats.diggCount,
                         predictedLanguage: ttdata.props.pageProps.seoProps.predictedLanguage,
                         description: ttdata.props.pageProps.seoProps.metaParams.description,
                         headers: {
                              'user-agent': userAgent(),
                              cookie: newCookie,
                              referer: 'https://www.tiktok.com/',
                         },
                         posts: []
                    }
                    for (let i = 0;i < ttdata.props.pageProps.items.length;i++) {
                         const meta = ttdata.props.pageProps.items[i].video
                         result.posts.push({
                              description: ttdata.props.pageProps.items[i].desc,
                              thumbnail: meta.originCover,
                              dynamic_thumb: meta.dynamicCover,
                              duration: meta.duration,
                              resolution: meta.width + 'x' + meta.height,
                              stream_url: meta.playAddr,
                              download_url: meta.downloadAddr,
                              audio_only: ttdata.props.pageProps.items[i].music.playUrl,
                              format: meta.format
                         })
                    }
                    resolve(result)
               })
               .catch((response) => {
                    reject({ status: false, message: response })
               })
     })
}

function tiktokdownload(url) {
     return new Promise(async (resolve, reject) => {
          const getDataFirst = await Axios.get('https://www.tiktok.com')
          const newCookie = getDataFirst.headers['set-cookie'].join('')
          Axios.get(url, {
               headers: {
                    'user-agent': userAgent(),
                    'Cookie': newCookie
               }
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
                    const meta = ttdata.props.pageProps.itemInfo.itemStruct
                    resolve({
                         status: true,
                         author: {
                              name: meta.author.uniqueId,
                              nick: meta.author.nickname,
                              avatarAuthor: meta.author.avatarLarger,
                         },
                         stats: {
                              playCount: meta.stats.playCount,
                              commentCount: meta.stats.commentCount,
                              shareCount: meta.stats.shareCount,
                              diggCount: meta.stats.diggCount,
                         },
                         headers: {
                              'user-agent': userAgent(),
                              cookie: newCookie,
                              referer: 'https://www.tiktok.com/',
                         },
                         timestamp: meta.createTime,
                         description: meta.desc,
                         duration: meta.video.duration,
                         resolution: meta.video.width + 'x' + meta.video.height,
                         thumbnail: meta.video.originCover,
                         dynamic_thumb: meta.video.dynamicCover,
                         stream_url: meta.video.playAddr,
                         download_url: meta.video.downloadAddr,
                         audio_only: meta.music.playUrl,
                         format: meta.video.format
                    })
               })
               .catch((response) => {
                    reject({ status: false, message: response })
               })
     })
}

// tiktokdownload('https://www.tiktok.com/@emeraldyrafael/video/6949717976283172098?is_copy_url=1&is_from_webapp=v1')
// tiktokstalk('@emeraldyrafael')
//      .then(console.log)
//      .catch(console.log)

module.exports = { tiktokdownload, tiktokstalk }
