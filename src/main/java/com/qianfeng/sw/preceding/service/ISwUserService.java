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
}
