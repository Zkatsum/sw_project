package com.qianfeng.sw.queen.dto;

import java.io.Serializable;

/**
 * Created by pxk on 2018/4/11/011.
 */
public class AdminUserDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer adminUserId;

    private String adminUserUsername;

    private String adminUserPassword;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getAdminUserId() {
        return adminUserId;
    }

    public void setAdminUserId(Integer adminUserId) {
        this.adminUserId = adminUserId;
    }

    public String getAdminUserUsername() {
        return adminUserUsername;
    }

    public void setAdminUserUsername(String adminUserUsername) {
        this.adminUserUsername = adminUserUsername;
    }

    public String getAdminUserPassword() {
        return adminUserPassword;
    }

    public void setAdminUserPassword(String adminUserPassword) {
        this.adminUserPassword = adminUserPassword;
    }
}
