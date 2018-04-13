package com.qianfeng.sw.realm;


import com.qianfeng.sw.queen.dao.IAdminDAO;
import com.qianfeng.sw.queen.dto.AdminUserDTO;
import org.apache.shiro.authc.*;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthenticatingRealm;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Administrator on 2018/3/26.
 */
public class MybatisRealm extends AuthenticatingRealm{

    @Autowired
    private IAdminDAO adminDAO;

    @Override
    public String getName(){return "MybatisRealm";}


    /**
     * 用来进行登陆验证的方法
     * @param authenticationToken token 用户提交的口令，就是UsernamePasswordToken
     * @return
     * @throws AuthenticationException
     */
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        //AuthenticationToken是UsernamePasswordToken的父类
        //1:将AuthenticationToken转换为UsernamePasswordToken类型
        UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) authenticationToken;
        //2:获取用户提交的用户名和密码
        String username = usernamePasswordToken.getUsername();
        char[] password = usernamePasswordToken.getPassword();
        //3:将密码转换为字符串类型
        String passwordStr = new String(password, 0, password.length);

        System.out.println(username+"\\"+passwordStr);
        //4:使用M层方法查询数据库数据
        AdminUserDTO userDto = adminDAO.checkUsername(username);
        //5：对用户名以及密码进行验证
        if (userDto == null){
            throw new UnknownAccountException("你输入的用户名不存在，请注册后在登陆");
        }
        //对用户传入的密码的明文进行加密
        SimpleHash simpleHash = new SimpleHash("MD5", passwordStr, userDto.getAdminUserUsername());
        //判断密码
        if (!userDto.getAdminUserPassword().equals(simpleHash.toString())){
            throw new IncorrectCredentialsException("密码错误");
        }
        //判断密码
//        if (!tbUserdto.getPassword().equals(passwordStr)){
//            throw new IncorrectCredentialsException("您输入的密码有误");
//        }
        //6:验证通过 参数1和2：用户名和密码，参数3：是当前realm的唯一标识---realm的名称
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(username, passwordStr, getName());
        return simpleAuthenticationInfo;
    }
}
