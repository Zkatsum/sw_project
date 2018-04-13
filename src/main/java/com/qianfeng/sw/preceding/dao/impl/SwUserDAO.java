package com.qianfeng.sw.preceding.dao.impl;

import com.qianfeng.sw.preceding.dao.ISwUserDAO;
import com.qianfeng.sw.preceding.dto.SwUserDTO;


import org.apache.ibatis.session.SqlSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
/**Author:wanggaiwei
 * Created by admin on 2018/4/10.
 */
@Repository
public class SwUserDAO implements ISwUserDAO {
    @Autowired
     private SqlSession sqlSession;
    /**
     * 手机号登录方法
     * @param userPhone
     * @return SwUserDTO
     */
    @Override
    public SwUserDTO getUserLogin(String userPhone) {

        SwUserDTO swUserDTO = sqlSession.selectOne("com.qianfeng.sw.swuser.uservalue",userPhone);
        return swUserDTO;
    }

    /**
     * 邮箱登录方法
     * @param userEmail
     * @return 用户对象
     */

    @Override
    public SwUserDTO getUserEmailLogin(String userEmail) {
        SwUserDTO swUserDTO = sqlSession.selectOne("com.qianfeng.sw.swuser.user_email", userEmail);
        return swUserDTO;
    }

    /**
     * 用户名登录方法
     * @param userName
     * @return 用户对象
     */
    @Override
    public SwUserDTO getUserNameLogin(String userName) {
        SwUserDTO swUserDTO = sqlSession.selectOne("com.qianfeng.sw.swuser.user_name", userName);
        return swUserDTO;
    }

    /**
     * 用户注册方法
     * @param swUserDTO
     * @return
     */

    @Override
    public Integer getUserInsert(SwUserDTO swUserDTO) {
        int insert = sqlSession.insert("com.qianfeng.sw.swuser.user_insert", swUserDTO);
        return insert;
    }
}
