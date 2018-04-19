package com.qianfeng.sw.preceding.controller;

import com.qianfeng.sw.preceding.config.UserConfig;
import com.qianfeng.sw.preceding.dto.SwUserDTO;
import com.qianfeng.sw.preceding.service.ISwUserService;
import com.qianfeng.sw.preceding.service.impl.SwUserService;
import com.qianfeng.sw.realm.UserRealm;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
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

    private static final Logger logger = Logger.getLogger("SwUserController");

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

            if(null!= UserConfig.Utlity.map.get(userPhone)){

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
                        UserConfig.Utlity.map.put(userPhone, session);
                        HttpSession httpSession = UserConfig.Utlity.map.get(userPhone);
                        if(logger.isInfoEnabled()){
                            logger.info(httpSession.toString());
                        }
                        session.setAttribute("users", swuserDto);
//                        if(StringUtils.equalsIgnoreCase(userPhone,swuserDto.getUserPhone())) {

                            session.setAttribute("userPhone",userPhone);
//                        }
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
    public String getclick(String userPhone ,HttpSession session){

        if(logger.isInfoEnabled()){
            logger.info(userPhone);
        }

        for(int i=0;i<UserRealm.LIST_USERDTO.size();i++) {

            UserConfig.Utlity.swUserDTO = UserRealm.LIST_USERDTO.get(i);

            HttpSession httpSession = UserConfig.Utlity.map.get(userPhone);
            if(logger.isInfoEnabled()){
                logger.info(httpSession+"==============");
            }

            if(StringUtils.equalsIgnoreCase(userPhone,UserConfig.Utlity.swUserDTO.getUserPhone())||StringUtils.equalsIgnoreCase(userPhone,UserConfig.Utlity.swUserDTO.getUserName()
            )||StringUtils.equalsIgnoreCase(userPhone,UserConfig.Utlity.swUserDTO.getUserEmail())) {
                session.removeAttribute("users");
                session.removeAttribute("userPhone");
                UserConfig.Utlity.map.remove(userPhone);
                UserRealm.LIST_USERDTO.remove(userPhone);
            }
        }

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
//            if(StringUtils.equalsIgnoreCase(userPhone,swuserDto.getUserPhone())) {
                modelMap.put("userName", swuserDto.getUserName());
                modelMap.put("userPhone", swuserDto.getUserPhone());
//            }
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



    /**
     * 跳转到个人信息页面
     * @param session
     * @param modelMap
     * @param request
     * @return 个人信息页面
     */
    @RequestMapping("/personPage")
    public String Person(HttpSession session,ModelMap modelMap,HttpServletRequest request){
        SwUserDTO user = (SwUserDTO) request.getSession().getAttribute("user");

        SwUserDTO userNameLogin = swUserService.getUserAll(user.getUserName());
        modelMap.put("user",userNameLogin);
        return "person";
    }

    /**
     * 编辑个人信息
     * @param id
     * @param session
     * @param modelMap
     * @param request
     * @return 个人信息修改
     */
    @RequestMapping("/personUp/{id}")
    public String updatePerson(@PathVariable("id") Integer id,HttpSession session,ModelMap modelMap,HttpServletRequest request){
        SwUserDTO user = (SwUserDTO) request.getSession().getAttribute("user");

        SwUserDTO userNameLogin = swUserService.getUserAll(user.getUserName());
        modelMap.put("users",userNameLogin);
        return "person1";
    }

    /**
     * 完成修改跳转
     * @param id
     * @param session
     * @param modelMap
     * @param request
     * @param userEmail
     * @param userPhone
     * @return 个人信息
     */
    @RequestMapping("/personSave/{id}")
    public String savePerson(@PathVariable("id")Integer id,
                             HttpSession session,ModelMap modelMap,HttpServletRequest request,String userEmail,String userPhone){

        SwUserDTO user = (SwUserDTO) request.getSession().getAttribute("users");
        SwUserDTO user1 = swUserService.getUserAll(user.getUserName());

        user1.setUserPhone(userPhone);
        user1.setUserEmail(userEmail);
        swUserService.updateUser(user1);
        modelMap.put("user",user1);
        return "person";
    }

    /**
     * 跳转到密码修改
     * @param modelMap
     * @return 密码修改页面
     */
    @RequestMapping("/passwordUp")
    public String passwordUp(ModelMap modelMap){
        return "passwordUp";
    }

    /**
     * 完成密码修改
     * @param session
     * @param modelMap
     * @param request
     * @param newpassword
     * @return 个人信息
     */
    @RequestMapping("/passwordUp1")
    public String passwordUp1(HttpSession session,ModelMap modelMap,HttpServletRequest request,String newpassword){
        SwUserDTO user = (SwUserDTO) request.getSession().getAttribute("user");
        SimpleHash simpleHash = new SimpleHash("MD5", newpassword, user.getUserSalt());
        SwUserDTO user1 = swUserService.getUserAll(user.getUserName());

        user1.setUserPassword(simpleHash.toString());
        swUserService.passwordUp(user1);
        modelMap.put("user",user1);
        return "person";
    }

}
