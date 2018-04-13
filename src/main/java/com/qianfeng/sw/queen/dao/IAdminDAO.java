package com.qianfeng.sw.queen.dao;


import com.qianfeng.sw.queen.dto.AdminUserDTO;

/**
 * Created by pxk on 2018/4/11/011.
 */
public interface IAdminDAO {

    AdminUserDTO checkUsername(String username);
}
