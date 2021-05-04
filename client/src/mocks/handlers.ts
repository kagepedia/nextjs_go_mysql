import { rest } from 'msw'

export const handlers = [
    // server side
    rest.get('http://localhost:8080/api/sever', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    image: 'https://pixnio.com/free-images/2017/12/19/2017-12-19-19-22-29-1200x780.jpg',
                    date:  '2021.04.01',
                    title: 'のどかな風景',
                },
                {
                    id: 2,
                    image: 'https://pixnio.com/free-images/2017/09/29/2017-09-29-09-57-21-1100x683.jpg',
                    date:  '2021.04.02',
                    title: '横になったらすぐに寝れそうな草原',
                },
                {
                    id: 3,
                    image: 'https://i0.hippopx.com/photos/683/318/324/wolf-wolves-snow-wolf-landscape-preview.jpg',
                    date:  '2021.04.03',
                    title: '霧の中に立ちはだかるオオカミ',
                },
                {
                    id: 4,
                    image: 'https://cdn.pixabay.com/photo/2021/01/10/08/39/image-5904393_960_720.jpg',
                    date:  '2021.04.04',
                    title: '紅色のすだれが美しい夕方',
                },
            ])
        )
    }),
    // server side
    rest.get('http://localhost:8080/api/sever/posts/:id', (req, res, ctx) => {
        const pid = req.params.id
        
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: pid,
                    image: 'https://pixnio.com/free-images/2017/12/19/2017-12-19-19-22-29-1200x780.jpg',
                    date:  '2021.04.01',
                    title: 'のどかな風景',
                    description: '北海道に行った時のことです。\n自然がとてもきれいでよかったです。',
                },
            ])
        )
    }),
    // client side
    rest.get('/api/client', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                username: 'client',
            })
        )
    }),
]