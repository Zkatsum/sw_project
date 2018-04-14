package com.qianfeng.sw.preceding.service.impl;

import com.qianfeng.sw.preceding.dao.ISwUserDAO;
import com.qianfeng.sw.preceding.dto.SwUserDTO;
import com.qianfeng.sw.preceding.listener.SessionLisener;
import com.qianfeng.sw.preceding.service.ISwUserService;
import com.sun.xml.internal.bind.v2.runtime.output.SAXOutput;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.Enumeration;

/**Author:wanggaiwei
 * Created by wanggaiwei on 2018/4/10.
 */
@Service

public class SwUserService implements ISwUserService{
    @Autowired
    private ISwUserDAO swUserDAO;

    /**
     * 手机号登录方法
     * @param userPhone
     * @return SwUserDTO
     */
    @Override
    public SwUserDTO getUserLogin(String userPhone) {
        return swUserDAO.getUserLogin(userPhone);
    }

    /**
     * 邮箱登录的方法
     * @param userEmail
     * @return
     */
    @Override
    public SwUserDTO getUserEmailLogin(String userEmail) {
        return swUserDAO.getUserEmailLogin(userEmail);
    }

    /**
     * 用户名字登录的方法
     * @param userName
     * @return
     */

    @Override
    public SwUserDTO getUserNameLogin(String userName) {
        return swUserDAO.getUserNameLogin(userName);
    }

    /**
     * 用户注册的方法
     * @param swUserDTO
     * @return
     */
    @Override
    public Integer getUserInsert(SwUserDTO swUserDTO) {
        String userName1 = swUserDTO.getUserName();
        char[] chars = userName1.toCharArray();
        String str= String.valueOf(chars[chars.length - 1]);
        swUserDTO.setUserSalt(str);
        SimpleHash md5 = new SimpleHash("MD5", swUserDTO.getUserPassword(), str);
        swUserDTO.setUserPassword(md5.toString());
        return swUserDAO.getUserInsert(swUserDTO);
    }

    public static void UserLogout(SwUserDTO username){
        if(SessionLisener.map.get( username ) != null) {
           HttpSession session = SessionLisener.map.get(username);
           /*  SessionLisener.map.remove(username);*/
            /**
             * 获取所有的登录名
             */
           Enumeration attributeNames = session.getAttributeNames();
            while (attributeNames.hasMoreElements()) {
                String sessionName = (String) attributeNames.nextElement();
                System.out.println(sessionName);
             // 删除保存名字的Session

                session.removeAttribute(sessionName);
            }
            SwUserDTO swUserDTO = (SwUserDTO) session.getAttribute("users");
            System.out.println(swUserDTO);

        }
    }
}
