import request from '@/utils/request'

export default {
  uploadImage (imageObj) {
    return request({
      url: `/teacher/uploadQuestionImage`,
      method: 'post',
      data: imageObj
    })
  },
}
