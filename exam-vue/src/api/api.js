let API = {
  //应用表
  api: {
    // 查询应用列表
    register:  '/common/register',
    //查询当前的验证码
    getCode: '/util/getCode',
    //校验用户名
    checkUsername: '/common/check',
    //登陆接口
    login: '/common/login',
    //获取主页面的左侧menu数据
    getMenuInfo: '/common/getMenu',
    //检验token合法(返回当前对象)
    checkToken: '/common/checkToken',
    //用户退出登录
    logout: '/common/logout',
    //获取用户信息(可附带查询条件,可分页,n功能合一接口)
    getUserInfo: '/admin/getUser',
    //管理员操作用户
    handleUser: '/admin/handleUser',
    //管理员新增用户
    addUser: '/admin/addUser',
    //获取角色信息
    getRoleInfo: '/admin/getRole',
    //获取所有题库信息
    getQuestionBank: '/teacher/getQuestionBank',
    //获取题目信息(可附带查询条件,可分页,n功能合一接口)
    getQuestion: '/teacher/getQuestion',
    //批量删除题目
    deleteQuestion: '/teacher/deleteQuestion',
    //将题目加入进题库
    addBankQuestion: '/teacher/addBankQuestion',
    //将题目从题库中移除
    removeBankQuestion: '/teacher/removeBankQuestion',
    //填加题目中的上传图片
    uploadQuestionImage: '/teacher/uploadQuestionImage',
    //添加题目
    addQuestion: '/teacher/addQuestion',
    //根据题目id查询题目信息
    getQuestionById: '/teacher/getQuestionById',
    //根据题目id更新题目信息
    updateQuestion: '/teacher/updateQuestion',
    //查询所有题库信息和里面含有的题目类型的数量
    getBankHaveQuestionSumByType: '/teacher/getBankHaveQuestionSumByType',
    //删除题库及去除所有包含题库信息的题目
    deleteQuestionBank: '/teacher/deleteQuestionBank',
    //添加题库信息
    addQuestionBank: '/teacher/addQuestionBank',
    //根据题库id查询题库信息
    getBankById: '/teacher/getBankById',
    //根据题库id查询题库中所有单选 多选 判断题
    getQuestionByBank: '/teacher/getQuestionByBank',
    //根据题库id查询各种类型的题目
    getQuestionByBankIdAndType: '/teacher/getQuestionByBankIdAndType',
    //查询考试信息
    getExamInfo: '/teacher/getExamInfo',
    //对考试信息操作
    operationExam: '/teacher/operationExam',
    //根据题库添加考试
    addExamByBank: '/teacher/addExamByBank',
    //根据题目列表添加考试
    addExamByQuestionList: '/teacher/addExamByQuestionList',
    //根据考试id查询考试信息和题目信息
    getExamInfoById: '/teacher/getExamInfoById',
    //更新考试的规则信息
    updateExamInfo: '/teacher/updateExamInfo',
  },
}

export default {
  API: API,
}
