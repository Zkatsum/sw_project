package com.qianfeng.sw.preceding.controller;

import com.qianfeng.sw.preceding.dto.SwUserDTO;
import com.qianfeng.sw.preceding.listener.SessionLisener;
import com.qianfeng.sw.preceding.service.ISwUserService;
import com.qianfeng.sw.preceding.service.impl.SwUserService;
import com.qianfeng.sw.realm.UserRealm;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.support.SessionStatus;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**Author:wanggaiwei
 * Created by wanggaiwei on 2018/4/11.
 */

@Controller
@RequestMapping("/user")
public class SwUserController {

    @Autowired
    private ISwUserService swUserService;
    /**
     * Author:wanggawei
     * 跳转到登录页面
     * @return 登录页面地址
     */

     @RequestMapping("/loginpage")
     public String getLoginPage(){
         return "login";
     }
    /**
     * 登录方法
     * @return 到index页面
     */
     @RequestMapping("/login")
     @ResponseBody
     public String getUserLogin(ModelMap modelMap, HttpSession session, HttpServletRequest req, String userPhone, String userPassword){


         try {

             /**
              * 该账号已经被登陆
              */

             if(null!= SessionLisener.map.get(userPhone)){

                 /**
                  * 将已经登录的信息删除
                  */
                 SwUserService.UserLogout(userPhone);


             }else{

                 if(!StringUtils.equalsIgnoreCase(userPhone,"")&&userPhone!=null) {


                  UsernamePasswordToken token = new UsernamePasswordToken(userPhone, userPassword);
                  Subject subject = SecurityUtils.getSubject();
                  subject.login(token);

                  for(int i=0;i<UserRealm.LIST_USERDTO.size();i++){

                      SwUserDTO  swuserDto=UserRealm.LIST_USERDTO.get(i);
                      SessionLisener.map.put(userPhone, session);
                      session.setAttribute("users", swuserDto);
                      if(StringUtils.equalsIgnoreCase(userPhone,swuserDto.getUserPhone())) {

                          session.setAttribute("userPhone",userPhone);
                      }
                  }


                  }
             }
         } catch (UnknownAccountException e){
             e.printStackTrace();
             return "userPassfailure";

         } catch (AuthenticationException e){
             e.printStackTrace();
              return "userPhoneNull";
         }
         SwUserDTO swUserDTO = (SwUserDTO) req.getSession().getAttribute("users");

         if(null==swUserDTO){

             return "takeUp";
         }else{
             return "success";
         }


     }
    /**
     *
     */
    @RequestMapping("/click")
    public String getclick(String userPhone){

        SessionLisener.map.remove(userPhone);


        return "index";
    }

    /**Author:wanggaiwei
     * 跳转到index页面
     * @return
     */
    @RequestMapping("/indexPage")
    public String getIndexPage(ModelMap modelMap,HttpSession session){
        String userPhone = (String) session.getAttribute("userPhone");
        for(int i=0;i<UserRealm.LIST_USERDTO.size();i++) {
             SwUserDTO swuserDto = UserRealm.LIST_USERDTO.get(i);
            if(StringUtils.equalsIgnoreCase(userPhone,swuserDto.getUserPhone())) {
                modelMap.put("userName", swuserDto.getUserName());
                modelMap.put("userPhone", swuserDto.getUserPhone());
            }
        }
         return "index";
    }
    @RequestMapping("/index")
    public String getIndex(ModelMap modelMap){

        return "index";
    }
    /**
     * 跳转到注册页面
     *
     */
    @RequestMapping("/register")
    public String getRegister(){
        return "zhuce";
    }
    /**
     * 注册方法
     */
    @RequestMapping("/userInsert")
    @ResponseBody
    public String getUserInsert(SwUserDTO swUserDTO,HttpServletRequest req,String code){

        String codes = (String) req.getSession().getAttribute("code");
        if(!StringUtils.equalsIgnoreCase(codes,code)){
             return "codeFailure";
        }

        if(swUserDTO.equals(null)||swUserDTO.equals("")){
            return "failure";
        }
        Integer userInsert = swUserService.getUserInsert(swUserDTO);
        if(userInsert<0){
            return "failure";
        }
        return "success";
    }



}
