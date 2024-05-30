import api from "./api"

export type EpisodeType = {
    id: number
    name: string
    synopsis: string
    order: number
    videoUrl: string
    secondsLong: number
}

export type CourseType = {
    id: number
    name: string
    thumbnailUrl: string
    synopsis: string
    episodes?: EpisodeType[]
}

const courseServices = {
    getNewestCourse: async () => {
        const res = await api.get('/courses/newest').catch((err) => {
            console.log(err.response.data.message)
            return err.response
        })

        return res
    },
    getFeatureCourses: async() => {
        const token = sessionStorage.getItem('onebitflix-token')

        const res = await api.get('/courses/featured', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            console.log(err.response.data.message)

            return err.response
        })

        return res
    },
    addToFav: async(courseId: number | string) => {
        const token = sessionStorage.getItem('onebitflix-token')
        const res = await api.post('/favorites', {courseId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            return err.response
        })

        return res
    },
    removeFav: async(courseId: number | string) => {
        const token = sessionStorage.getItem('onebitflix-token')
        const res = await api.delete('/favorites', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { courseId }
        }).catch(err => {
            return err.response
        })

        return res
    },
    getFavCourse: async() => {
        const token = sessionStorage.getItem('onebitflix-token')
        const res = await api.get('/favorites', {
            headers: {Authorization: `Bearer ${token}`}
        }).catch(err => {
            return err.response
        })

        return res
    },
    getSearch: async (name: string) => {
        const token = sessionStorage.getItem('onebitflix-token')
        const res = await api.get(`/courses/search?name=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => { return err.response})

        return res
    }
}

export default courseServices