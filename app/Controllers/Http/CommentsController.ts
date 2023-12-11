import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()
    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const comment = await Comment.create(body)

    response.status(201)

    return {
      message: 'Comment added!',
      data: comment,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const comment = await Comment.findOrFail(params.id)

    await comment.delete()

    return {
      message: 'Comment deleted!',
      data: comment,
    }
  }
}
