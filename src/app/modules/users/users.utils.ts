import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne(
    {},
    {
      _id: 0,
      id: 1,
    }
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementedId
}
