import cmRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return cmRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}