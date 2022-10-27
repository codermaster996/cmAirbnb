import cmRequest from "..";

export function getHomeGoodPriceData() {
  return cmRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return cmRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDisCountData() {
  return cmRequest.get({
    url: '/home/discount'
  })
}

export function getHomeRecommend() {
  return cmRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongFor() {
  return cmRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlus() {
  return cmRequest.get({
    url: '/home/plus'
  })
}

