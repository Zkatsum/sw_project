package com.qianfeng.sw.queen.dao.impl;

import com.qianfeng.sw.queen.dao.IAdminDAO;
import com.qianfeng.sw.queen.dto.AdminUserDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


/**
 * Created by pxk on 2018/4/11/011.
 */
@Repository
public class AdminDAO extends SqlSessionDaoSupport implements IAdminDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /**
     * 管理员认证登录
     * @return
     */
    public AdminUserDTO checkUsername(String username) {
        AdminUserDTO admin = getSqlSession().selectOne("com.qianfeng.sw.dto.AdminUserMapper.checkUsername", username);
        return admin;
    }
}
