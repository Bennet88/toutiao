import request from '@/utils/request'

/**
 * 搜索建议
 * @param {String} q 搜索的关键词
 * @returns Promise
 */
export const getSuggestionsAPI = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}

/**
 * 获取搜索结果
 * @param {Number} page 分页页数，非必填，不填默认值为1
 * @param {Number} pre_page 每一页数据的数量
 * @param {String} q 搜索关键词
 * @returns
 */
export const getResultsAPI = (/* eslint-disable-line */ page, pre_page, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      pre_page,
      q
    }
  })
}
