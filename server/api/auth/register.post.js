import {sendError} from "h3"
export default defineEventHadler(async (event) => {
    conts body = await useBody(event)

    const {username, email, password, repeatPassword, name} = body

    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid params"}))
    }

    return {
        body: body
    }
})