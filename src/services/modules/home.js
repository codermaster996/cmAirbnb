import cmRequest from "..";

export function getHomeGoodPriceDate() {
  return cmRequest.get({
    url: '/home/goodprice'
  })
}