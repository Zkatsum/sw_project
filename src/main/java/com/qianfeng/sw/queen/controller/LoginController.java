package com.qianfeng.sw.queen.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * Created by pxk on 2018/4/11/011.
 */
@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/login")
    public String login1(){
        return "z.qyhou.com/login1";
    }

    @RequestMapping("/admin")
    public String login(String username, String password, HttpSession session,String code){
        String code1 = (String) session.getAttribute("code");
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        System.out.println(password);
        if(StringUtils.equalsIgnoreCase(code,code1)){
            try {
                SecurityUtils.getSubject().login(token);
                return "z.qyhou.com/main";
            } catch (AuthenticationException e) {
                e.printStackTrace();
                System.out.println("账户错误，请输入正确密码!!!!");
            }
        }

        return "z.qyhou.com/login1";
    }
}
