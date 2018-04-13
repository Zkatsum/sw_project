package com.qianfeng.sw.realm;


import com.qianfeng.sw.preceding.config.UserConfig;
import com.qianfeng.sw.preceding.dto.SwUserDTO;
import com.qianfeng.sw.preceding.listener.SessionLisener;
import com.qianfeng.sw.preceding.service.ISwUserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;


/**shiro 的登录注册,权限代码
 * Author:wanggaiwei
 * Created by wanggaiwei on 2018/4/11.
 */
public class UserRealm  extends AuthorizingRealm{

    @Autowired
    private ISwUserService swuserService;

    private  SwUserDTO userLogin;
    public static List<SwUserDTO> LIST_USERDTO=new ArrayList<SwUserDTO>();

    @Override
    public String getName() {
        return super.getName();
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }



    /**Author:wanggaiwei
     * 进行登录操作的方法
     * @param
     * @return AuthenticationInfo
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

        UsernamePasswordToken  usernamePasswordToken= (UsernamePasswordToken) token;
        String username = usernamePasswordToken.getUsername();
        char[] password = usernamePasswordToken.getPassword();
        String passwordStr = new String(password, 0, password.length);

        if(StringUtils.equalsIgnoreCase(username,null)||StringUtils.equalsIgnoreCase(username,"")){
            throw new AuthenticationException("用户名不能为空");
        }
        /**
         * 判断最后一位是不是数字
         */
        char[] chars = username.toCharArray();

        if(Character.isDigit(chars[username.length()-1])&&username.length()==UserConfig.Utlity.USER_PHONE_LENGTH) {
            userLogin = swuserService.getUserLogin(username);
        }else
        /**
         * 判断邮箱是不是@qq.com结尾
         */if(StringUtils.endsWith(username,UserConfig.Utlity.USER_PHONE)){
            userLogin = swuserService.getUserEmailLogin(username);

        }else{
            userLogin =  swuserService.getUserNameLogin(username);
        }
        LIST_USERDTO.add(userLogin);

        SimpleHash simpleHash = new SimpleHash("MD5", passwordStr, userLogin.getUserSalt());
        if(StringUtils.equalsIgnoreCase(simpleHash.toString(),null)||!StringUtils.equalsIgnoreCase(simpleHash.toString(),userLogin.getUserPassword())){
             throw  new UnknownAccountException("密码不能为空或密码错误");
        }
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(userLogin.getUserName(), passwordStr, getName());

        return simpleAuthenticationInfo;
    }



}
