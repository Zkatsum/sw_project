package com.qianfeng.sw.preceding.service;

import com.qianfeng.sw.preceding.dto.SwUserDTO;

/**Author:wanggaiwei
 * Created by wanggaiwei on 2018/4/10.
 */
public interface ISwUserService {
    /**
     * 手机号登录方法
     */
    SwUserDTO getUserLogin(String userPhone);
    /**
     * 邮箱登录方法
     */
    SwUserDTO getUserEmailLogin(String userEmail);
    /**
     * 用户名登录方法
     */
    SwUserDTO getUserNameLogin(String userName);
    /**
     * 用户注册方法
     */
    Integer  getUserInsert(SwUserDTO swUserDTO);
    /**
     * 用户修改方法
     */
    Integer  updateUser(SwUserDTO swUserDTO);
    /**
     * 查询全部属性方法
     */
    SwUserDTO getUserAll(String userName);
    /**
     * 修改密码方法
     */
    Integer passwordUp(SwUserDTO swUserDTO);

}
